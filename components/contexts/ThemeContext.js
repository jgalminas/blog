import { createContext, useContext, useEffect, useState } from "react";

const THEME_DARK = " theme-dark ";
const THEME_LIGHT = " theme-light ";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({children}) {

    const [currentTheme, setCurrentTheme] = useState(false);
    const [themeClass, setThemeClass] = useState(THEME_LIGHT);

    useEffect(() => {
        //save theme settings
    }, [])

    const theme = {
        current: currentTheme,
        themeClass: themeClass,
        setTheme
    }

    function setTheme() {

        if (theme.current) {
            setCurrentTheme(false);
            setThemeClass(THEME_LIGHT)
        } else {
            setCurrentTheme(true);
            setThemeClass(THEME_DARK)
        }
        
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}