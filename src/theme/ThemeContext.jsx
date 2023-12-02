import { createContext, useContext, useState } from "react";
import { setDarkTheme, setLightTheme } from "../config/cssVariables.js";

const ThemeContext = createContext();
const SetThemeContext = createContext();

export const useTheme = () => useContext( ThemeContext );
export const useToggleTheme = () => useContext( SetThemeContext );

export const themes = {
    DARK : 'DARK',
    LIGHT: 'LIGHT'
}

export default function ThemeProvider({ children }) {
    const [ theme, setTheme ] = useState( themes.DARK );

    const toggleTheme = () => {
        setTheme( prevTheme => {
            if ( prevTheme===themes.LIGHT ) {
                setDarkTheme()
                return themes.DARK
            }
            if ( prevTheme===themes.DARK ) {
                setLightTheme()
                return themes.LIGHT
            }
        } )
    }

    return (
            <ThemeContext.Provider value={ theme }>
                <SetThemeContext.Provider value={ toggleTheme }>
                    { children }
                </SetThemeContext.Provider>
            </ThemeContext.Provider>
    )

}
