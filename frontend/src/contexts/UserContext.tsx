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

    const value = {user, isLoggedIn};

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

export default UserProvider;