const getCSSVariable = (name) => window.getComputedStyle( document.documentElement ).getPropertyValue( name );
const setCSSVariable = (name, value) => document.documentElement.style.setProperty( name, value );


export const cssVariables = {
    primary   : getCSSVariable( '--primary-color' ),
    background: getCSSVariable( '--background-color' ),
    text      : getCSSVariable( '--app-text-color' ),
    secondary : getCSSVariable( '--primary-color' ),
    selection : getCSSVariable( '--primary-color' ),
    fontFamily: getCSSVariable( '--font-family' ),
}


export function setDarkTheme() {
    setTheme( darkColors )
}

export function setLightTheme() {
    setTheme( lightColors )
}


const darkColors = {
    '--background-color'       : '#31363d',
    '--text-color'             : '#b7bbc3',
    '--background-accent'      : '#30353c',
    '--background-accent-light': '#3c424a',
    '--background-accent-dark' : '#262a30',
    '--app-text-color'         : '#949494'
}

const lightColors = {
    '--background-color'       : '#b9c0cb',
    '--text-color'             : '#262a30',
    '--background-accent'      : '#c9d6d7',
    '--background-accent-light': '#d5dde9',
    '--background-accent-dark' : '#9da3ad',
    '--app-text-color'         : '#121212'
}


function setTheme(theme) {
    const properties = Object.keys( theme )
    properties.forEach(
            property => setCSSVariable( property, theme[property] )
    )
}
