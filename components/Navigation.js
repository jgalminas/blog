import Link from "next/link"

export default function Navigation() {

    return (
        <div className="navigation">
            <ul className="flex row gap-10">
                <li> <Link href="/"> Home </Link> </li>
                <li> <Link href="/posts"> Posts </Link> </li>
            </ul>
        </div>
    )
}