import { useTheme } from './contexts/ThemeContext.js';
import Navigation from './Navigation.js';
import ToggleInput from './ToggleInput.js';

export default function Header() {

    const { current, setTheme, themeClass } = useTheme();

    return (
        <div className={themeClass + "header flex row"}>
            <Navigation/>
            <div className='flex-right'>
                <ToggleInput value={current} onChange={setTheme}/>
            </div>
        </div>
    )
}