import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { english } from "../data/languages/english";
import { portuguese } from "../data/languages/portuguese";

const dictionaries = { en: english, pt: portuguese };

export const AppContext = createContext(null);

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private mode / blocked storage: preference just won't persist.
  }
}

function initialLang() {
  const saved = readStorage("portfolio-language");
  if (saved === "pt" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function AppContextProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  // index.html already applied the right class before first paint, so read it back from the DOM.
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    writeStorage("portfolio-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    writeStorage("portfolio-language", lang);
  }, [lang]);

  const toggleTheme = useCallback(() => setIsDarkMode((dark) => !dark), []);

  const value = useMemo(
    () => ({ lang, t: dictionaries[lang], setLang, isDarkMode, toggleTheme }),
    [lang, isDarkMode, toggleTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
