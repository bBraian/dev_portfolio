import { createContext, useState } from "react";

import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

import { english } from "../data/languages/english";

export const AppContext = createContext({});

export function AppContextProvider({children}) {
    const [language, setLanguage] = useState(english);
    const [theme, setTheme] = useState(dark);

    function changeTheme() {
        theme === light ? setTheme(dark) : setTheme(light);
    }

    return (
        <AppContext.Provider
            value={{ language, setLanguage, changeTheme, theme }}
        >
            {children}
        </AppContext.Provider>
    )
}