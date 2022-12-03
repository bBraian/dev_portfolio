import { createContext, useState } from "react";

import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

export const AppContext = createContext({});

export function AppContextProvider({children}) {
    const [language, setLanguage] = useState('');
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