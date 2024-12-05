export {};

declare module "react";
declare module "react/jsx-runtime";

declare global {
    interface UserContextInterface {
        user: User | null;
        isLoggedIn: boolean;
    }

    interface SettingsContextInterface {
        settings: Settings;
    }

    type User = {
        Username: string;
        Email: string;
    }

    type Settings = {
        Language: string;
    }

    type Login = {
        username: string;
        password: string;
    }
}