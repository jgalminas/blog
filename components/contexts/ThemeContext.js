import { createContext, useContext, useEffect, useState } from "react";
import cookie from 'cookie-cutter';

const THEME_DARK = " theme-dark ";
const THEME_LIGHT = " theme-light ";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({children}) {

    useEffect(() => {

        // const themeSettings = cookie.get("theme_settings")

        // if (themeSettings === "true") {
        //     setCurrentTheme(true);
        // } else {
        //     setCurrentTheme(false);
        // }        

    }, [])

    const [currentTheme, setCurrentTheme] = useState(false);
    const [themeClass, setThemeClass] = useState(THEME_LIGHT);

    useEffect(() => {
        
        // cookie.set("theme_settings", currentTheme);

        // !currentTheme ? setThemeClass(THEME_LIGHT) : setThemeClass(THEME_DARK);

    }, [currentTheme])

    const theme = {
        current: currentTheme,
        themeClass: themeClass,
        setTheme
    }

    function setTheme() {

        if (theme.current) {
            setCurrentTheme(false);
            // setThemeClass(THEME_LIGHT)
        } else {
            setCurrentTheme(true);
            // setThemeClass(THEME_DARK)
        }
        
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}