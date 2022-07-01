import Navigation from './Navigation.js';
import ToggleInput from './ToggleInput.js';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../public/logo.svg';

export default function Header() {

    const { theme , setTheme } = useTheme();
    const [current, setCurrent] = useState(theme == 'dark' ? true : false);

    useEffect(() => {
        setTheme(current ? 'dark' : 'light');
    }, [current])

    return (
        <header className="header flex row">
        
            <Link href='/'>
                <Logo id='logo'/>
            </Link>

            <div id='nav-wrapper'>
                <Navigation/>
                <ToggleInput value={current} onChange={() => setCurrent(!current)}/>
            </div>

        </header>
    )
}