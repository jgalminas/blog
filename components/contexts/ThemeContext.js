import { createContext, useContext, useEffect, useState } from "react";
import { setCookies } from "cookies-next";

const THEME_DARK = " theme-dark ";
const THEME_LIGHT = " theme-light ";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ initialTheme, children }) {

    const [currentTheme, setCurrentTheme] = useState(initialTheme);
    const [themeClass, setThemeClass] = useState(!initialTheme ? THEME_LIGHT : THEME_DARK);

    const theme = {
        current: currentTheme,
        themeClass: themeClass,
        setTheme
    }

    useEffect(() => {
        
        setCookies('theme_settings', currentTheme, { maxAge: 60 * 60 * 24 * 90 });
        !currentTheme ? setThemeClass(THEME_LIGHT) : setThemeClass(THEME_DARK);

    }, [currentTheme])

    function setTheme() {

        if (theme.current) {
            setCurrentTheme(false);
        } else {
            setCurrentTheme(true);
        }
        
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}