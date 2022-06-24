import Navigation from './Navigation.js';
import ToggleInput from './ToggleInput.js';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {

    const { theme , setTheme } = useTheme();
    const [current, setCurrent] = useState(theme == 'dark' ? true : false);

    useEffect(() => {
        setTheme(current ? 'dark' : 'light');
    }, [current])

    return (
        <header className="header flex row">
            <Navigation/>
            <div className='flex-right'>
                <ToggleInput value={current} onChange={() => setCurrent(!current)}/>
            </div>
        </header>
    )
}