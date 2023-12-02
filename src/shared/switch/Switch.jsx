import './Switch.css'
import { useToggleTheme } from "../../theme/ThemeContext.jsx";

export default function Switch() {

    const toggleTheme = useToggleTheme()

    return (
            <label className="label">
                <div className="toggle">
                    <input className="toggle-state"
                           type="checkbox"
                           name="check"
                           value="checked"
                           onChange={ toggleTheme }/>
                    <div className="indicator">
                        <i className='bi bi-sun text-xl'></i>
                        <i className='bi bi-moon text-xl'></i>
                    </div>
                </div>
                <div className="label-text"></div>
            </label>
    )

}
