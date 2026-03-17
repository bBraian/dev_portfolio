import { createContext, useRef, useState, useEffect } from "react";
import { english } from "../data/languages/english";
import { portuguese } from "../data/languages/portuguese";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('portfolio-language');
        return savedLanguage === 'pt' ? portuguese : english;
    });
    
    const currentLanguage = language === portuguese ? 'pt' : 'en';

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        return savedTheme ? savedTheme === 'dark' : true; // default dark as in original
    });

    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('portfolio-theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('portfolio-language', language === portuguese ? 'pt' : 'en');
    }, [language]);

    function scrollToSection(section) {
        if (section?.current) {
            let height = section.current.offsetTop - 80;
            window.scrollTo({ top: height, behavior: 'smooth' });
        }
    }

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
    }

    function changeLanguage(lang) {
        setLanguage(lang === 'pt' ? portuguese : english);
    }

    return (
        <AppContext.Provider
            value={{ 
                language, 
                currentLanguage,
                setLanguage: changeLanguage, 
                toggleTheme, 
                isDarkMode, 
                homeRef, 
                skillsRef, 
                projectsRef, 
                scrollToSection 
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
