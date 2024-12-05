import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

const useSettingsContext = (): SettingsContextInterface => {
    const context = useContext(SettingsContext);

    if(!context) {
        throw new Error("useSettingsContext must be used within a Settings Provider");
    }

    return context;
}

export default useSettingsContext;