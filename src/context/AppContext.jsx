import { createContext, useState } from "react";

import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

import { portuguese } from "../data/languages/portuguese";
import { english } from "../data/languages/english";

export const AppContext = createContext({});

export function AppContextProvider({children}) {
    const [language, setLanguage] = useState(english);
    const [theme, setTheme] = useState(dark);

    function changeTheme() {
        theme === light ? setTheme(dark) : setTheme(light);
    }

    function changeLanguage() {
        language === english ? setLanguage(portuguese) : setLanguage(english);
    }

    return (
        <AppContext.Provider
            value={{ language, setLanguage, changeTheme, theme, language, changeLanguage }}
        >
            {children}
        </AppContext.Provider>
    )
}