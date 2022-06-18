import Navigation from './Navigation.js';
import ToggleInput from './ToggleInput.js';
import { useTheme } from 'next-themes';

export default function Header() {

    const { theme , setTheme } = useTheme();




    return (
        <div className="header flex row">
            <Navigation/>
            <div className='flex-right'>
                {/* <ToggleInput value={current} onChange={changeTheme}/> */}
                <button onClick={() => setTheme('dark')}>D</button>
                <button onClick={() => setTheme('light')}>L</button>
            </div>
        </div>
    )
}