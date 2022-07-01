import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";
import MenuIcon from '../public/menu.svg';
import useTransition from './hooks/useTransition.js';

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

    useClickOutside(buttonRef, menuRef, () => toggle(500));

    const [state, enter, exit] = useTransition(0);

    const isMobile = (windowWidth < 500) ? true : false;

    const navContent = (
        <ul className="flex row" onClick={() => toggle(500)}>
        <li> <Link href="/"> Home </Link> </li>
        <li> <Link href="/articles"> Articles </Link> </li>
        <li> <Link href="/about"> About me </Link> </li>
        </ul>
    );
    
    function toggle(delay) {

        if (!isOpen) {
            
            setOpen(true);
            enter()
        } else {
            exit();
            setTimeout(() => setOpen(false), delay);
        }

    }
        
    return (
        <nav className="navigation">

        {(isMobile) ?
            <div>
                <button id="nav-button" ref={buttonRef} onClick={() => toggle(500)}>
                    <MenuIcon/>
                </button>
                {isOpen && 
                    <div ref={menuRef} className={`navigation-tray ${state}`}> { navContent } </div>
                }
            </div>
        
        : navContent}

        </nav>
    )
}