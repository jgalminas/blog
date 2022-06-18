import { createContext, useContext, useEffect, useState } from "react";

const THEME_DARK = " theme-dark ";
const THEME_LIGHT = " theme-light ";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {

    const [currentTheme, setCurrentTheme] = useState(false);
    const [themeClass, setThemeClass] = useState(currentTheme ? THEME_DARK : THEME_LIGHT);

    const theme = {
        current: currentTheme,
        themeClass: themeClass,
        setTheme
    }

    useEffect(() => {

        // get the current theme from html class list
        const theme = document.documentElement.classList.contains(THEME_DARK.trim());
        (theme ? setCurrentTheme(true) : setCurrentTheme(false)) ;

    }, [])
    
    
    useEffect(() => {

        localStorage.setItem('theme_settings', currentTheme);
        !currentTheme ? setThemeClass(THEME_LIGHT) : setThemeClass(THEME_DARK);

        const htmlClassList = document.documentElement.classList;

        if (!currentTheme) {
            htmlClassList.replace(THEME_DARK.trim(), THEME_LIGHT.trim())
        } else {
            htmlClassList.replace(THEME_LIGHT.trim(), THEME_DARK.trim())
        }

    }, [currentTheme])

    function setTheme() {
        (currentTheme) ? setCurrentTheme(false) : setCurrentTheme(true);
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}