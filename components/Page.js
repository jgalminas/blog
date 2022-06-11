import { useTheme } from "./contexts/ThemeContext.js";
import Header from "./Header.js"

export default function Page({ children}) {

    const { themeClass } = useTheme();

    return (
        <div className={themeClass + "flex col page"}>
            <Header/>
            <div className={themeClass + "content"}>
                {children}
            </div>
        </div>
    )
}