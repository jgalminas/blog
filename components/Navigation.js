import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";
import MenuIcon from '../public/menu.svg';
import { createPortal } from "react-dom";

export default function Navigation({ headerRef }) {

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

    useClickOutside(buttonRef, menuRef, () => toggle());


    const isMobile = (windowWidth < 500) ? true : false;

    const navContent = (
        <ul className="flex row" onClick={() => toggle()}>
        <li> <Link href="/"> Home </Link> </li>
        <li> <Link href="/articles"> Articles </Link> </li>
        <li> <Link href="/about"> About me </Link> </li>
        </ul>
    );
    
    function toggle() {

        if (isMobile) {
            const header = headerRef?.current;

            if (!isOpen) {
    
                setOpen(true);
                header.classList.add('--open');
            } else {
                
                setOpen(false)
                header.classList.remove('--open');
            }
        }
    }
        
    return (
        <nav className="navigation">

        {(isMobile) ?
            <div>
                <button id="nav-button" ref={buttonRef} onClick={() => toggle()}>
                    <MenuIcon/>
                </button>
                {isOpen && typeof document !== 'undefined' &&

                    createPortal(
                        <div ref={menuRef} className='navigation-tray'> { navContent } </div>
                        , document.querySelector('.header__content')
                    )

                }
            </div>
        
        : navContent}

        </nav>
    )
}