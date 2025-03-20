"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/lib/firebase";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
    const {loginWithFirebase} = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    // ? Tanstack handling login request
    const loginMutation = useMutation({
        mutationFn: async () => {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseToken = await userCredential.user.getIdToken();
            await loginWithFirebase(firebaseToken);
        },
        onSuccess: () => {
            router.push("/dashboard");
        },
        onError: (error: any) => {
            console.error("Login fail", error);
        }
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            
                {loginMutation.isError && (
                    <p className="text-red-500 text-sm">Invalid email or password.</p>
                )}
    
                <form
                    onSubmit={(e) => {
                    e.preventDefault();
                    loginMutation.mutate();
                    }}
                    className="space-y-4"
                >
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
                        {loginMutation.isPending ? "Logging in..." : "Login"}
                    </Button>
                </form>
            </div>
        </div>
    )
};

export default LoginPage;