import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const useUserContext = (): UserContextInterface => {
    const context = useContext(UserContext);

    if(!context) {
        throw new Error("useUserContext must be used within a UserContext");
    }

    return context;
}

export default useUserContext;