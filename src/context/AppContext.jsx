import { createContext, useRef, useState } from "react";

import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

import { english } from "../data/languages/english";

export const AppContext = createContext({});

export function AppContextProvider({children}) {
    const [language, setLanguage] = useState(english);
    const [theme, setTheme] = useState(dark);

    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    function scrollToSection(section) {
        let height = section.current.offsetTop - 100;
        window.scrollTo({top: height, behavior: 'smooth'});
        // section.current?.scrollIntoView({ behavior: 'smooth' })
    }

    function changeTheme() {
        theme === light ? setTheme(dark) : setTheme(light);
    }

    return (
        <AppContext.Provider
            value={{ language, setLanguage, changeTheme, theme, homeRef, skillsRef, projectsRef, scrollToSection }}
        >
            {children}
        </AppContext.Provider>
    )
}