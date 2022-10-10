import { createContext, Dispatch } from "react";

export interface AppContextInterface {
    settingsOpen: boolean;
    setSettingsOpen: Dispatch<React.SetStateAction<boolean>>;
    showNews: boolean;
    setShowNews: Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;