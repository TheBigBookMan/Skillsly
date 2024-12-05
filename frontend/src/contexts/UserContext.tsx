import { createContext, useState, useEffect, ReactNode, FC } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextInterface | undefined> (undefined);

const UserProvider: FC<UserProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>({
        Username: "",
        Email: ""
    });

    // ? TODO true for dev
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const nav = useNavigate();

    // ? Login
    const Login = ({username, password}: Login) => {
        // TODO make API call to backend
        try {
             
        } catch(err) {
            console.log(err);
            // TODO write proper error alert
        }
    }

    const value = {user, isLoggedIn};

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

export default UserProvider;