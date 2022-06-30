import Navigation from './Navigation.js';
import ToggleInput from './ToggleInput.js';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

    const { theme , setTheme } = useTheme();
    const [current, setCurrent] = useState(theme == 'dark' ? true : false);

    useEffect(() => {
        setTheme(current ? 'dark' : 'light');
    }, [current])

    return (
        <header className="header flex row">
        
            <div className='logo-wrapper'>
            <Link href='/'>
            <a><Image src='/logo.svg' width={50} height={50} priority/></a>
            </Link>
            </div>

            <Navigation/>
            <div className='flex-right'>
                <ToggleInput value={current} onChange={() => setCurrent(!current)}/>
            </div>

        </header>
    )
}