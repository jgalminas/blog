import Link from "next/link"

export default function Navigation() {

    return (
        <div className="navigation">
            <ul className="flex row">
                <li> <Link href="/"> Home </Link> </li>
                <li> <Link href="/posts"> Articles </Link> </li>
                <li> <Link href="/about"> About me </Link> </li>
            </ul>
        </div>
    )
}