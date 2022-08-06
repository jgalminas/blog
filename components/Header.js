import Navigation from './Navigation.js';
import ToggleInput from './ToggleInput.js';
import { useTheme } from 'next-themes';
import { Fragment, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Logo from '../public/logo.svg';

export default function Header() {

    const { theme , setTheme } = useTheme();
    const [current, setCurrent] = useState(theme === 'dark' ? true : false);
    const headerRef = useRef();

    // header scroll
    useEffect(() => {

        window.addEventListener('scroll', () => {

            const header = headerRef?.current;

            try {
                if (window.scrollY > header.offsetTop) {
                    header.classList.add('--active');
                } else {
                    header.classList.remove('--active');
                }
            } catch {
                
            }

        })
    }, [])

    useEffect(() => {
        setTheme(current ? 'dark' : 'light');
    }, [current])

    return (
        <Fragment>
            <div className='header__padding'></div>   
            <header ref={headerRef} className='header flex row'>
                <div className="header__content flex row">
            
                    <Link href='/'>
                        <a aria-label='website logo'>
                            <Logo id='logo'/>
                        </a>
                    </Link>

                    <div id='nav-wrapper'>

                        <Navigation headerRef={headerRef}/>
                        <ToggleInput value={current} onChange={() => setCurrent(!current)}/>
                    </div>

                </div>
            </header>
        </Fragment>
    )
}