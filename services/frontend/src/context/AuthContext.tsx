import {createContext, useContext, useEffect, useState, ReactNode} from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import {auth} from '@/lib/firebase';
import axios from 'axios';
import { useRouter } from 'next/router';

type AuthContextType = {
    user: User | null;
    jwtToken: string | null;
    loading: boolean;
    loginWithFirebase: (firebaseToken: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [jwtToken, setJwtToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    // ? Listen for firebase auth changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if(firebaseUser) {
                const firebaseToken = await firebaseUser.getIdToken();

                await loginWithFirebase(firebaseToken);
            } else {
                setUser(null);
                setJwtToken(null);
                localStorage.removeItem("jwtToken");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // ? Login function: Exchange firebase ID token for JWT
    const loginWithFirebase = async (firebaseToken: string) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_AUTH_SERVICE_URL}/auth/login`, {
                headers: {Authorization: `Bearer ${firebaseToken}`}
            });

            const {jwtToken} = response.data;

            setJwtToken(jwtToken);
            localStorage.setItem('jwtToken', jwtToken);

            const verifyResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUTH_SERVICE_URL}/protected`, {
                headers: {Authorization: `Bearer ${jwtToken}`}
            });

            setUser(verifyResponse.data.user);
        } catch(err) {
            console.error(`Login failed ${err}`);
        }
    };

    // ? Logout function: remove state and localstorage JWT
    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setJwtToken(null);
        localStorage.removeItem("jwtToken");
        router.push("/login");
    }

    return (
        <AuthContext.Provider value={{ user, jwtToken, loading, loginWithFirebase, logout }}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}