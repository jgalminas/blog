import Link from "next/link"
import { useTheme } from './contexts/ThemeContext.js';

export default function Navigation() {

    const { themeClass } = useTheme();

    return (
        <div className={themeClass + "navigation"}>
            <ul className="flex row gap-10">
                <li> <Link href="/"> Home </Link> </li>
                <li> <Link href="/posts"> Posts </Link> </li>
            </ul>
        </div>
    )
}