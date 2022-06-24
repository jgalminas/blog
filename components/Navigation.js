import Link from "next/link"

export default function Navigation() {

    return (
        <nav className="navigation">
            <ul className="flex row">
                <li> <Link href="/"> Home </Link> </li>
                <li> <Link href="/articles"> Articles </Link> </li>
                <li> <Link href="/about"> About me </Link> </li>
            </ul>
        </nav>
    )
}