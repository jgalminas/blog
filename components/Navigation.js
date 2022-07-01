import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";
import MenuIcon from '../public/menu.svg';

export default function Navigation() {

    const [windowWidth, setWindowWidth] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef();
    const buttonRef = useRef();
    
    useEffect(() => {

        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', (e) => {
            setWindowWidth(e.target.innerWidth);
        })

    }, [])

    useClickOutside(buttonRef, menuRef, () => setOpen(false));

    const isMobile = (windowWidth < 500) ? true : false;

    const navContent = (
        <ul className="flex row" onClick={() => setOpen(false)}>
        <li> <Link href="/"> Home </Link> </li>
        <li> <Link href="/articles"> Articles </Link> </li>
        <li> <Link href="/about"> About me </Link> </li>
        </ul>
    );
    
    return (
        <nav className="navigation">

        {(isMobile) ?
            <div>
                <button id="nav-button" ref={buttonRef} onClick={() => setOpen(!isOpen)}>
                    <MenuIcon/>
                </button>
                {isOpen && 
                    <div ref={menuRef} className="navigation-tray"> { navContent } </div>
                }
            </div>
        
        : navContent}

        </nav>
    )
}