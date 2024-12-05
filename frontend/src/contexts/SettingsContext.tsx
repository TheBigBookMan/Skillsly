import { createContext, useState, useEffect, ReactNode, FC } from "react";
import { api } from "../utils/api";

interface SettingsProviderProps {
    children: ReactNode;
}

export const SettingsContext = createContext<SettingsContextInterface | undefined>(undefined);

const SettingsProvider: FC<SettingsProviderProps> = ({children}) => {
    const [settings, setSettings] = useState<Settings>({
        Language: "English"
    });

    const value = {settings};

    return (
        <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
    )
}

export default SettingsProvider;