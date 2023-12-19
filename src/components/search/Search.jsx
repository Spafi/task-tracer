import { InputText } from "primereact/inputtext";
import './Search.css'
import { useState } from "react";


export default function Search({ handleInput }) {
    const [ inputValue, setInputValue ] = useState( '' );

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue( value );

        handleInput( value )
    };
    return (
            <div className='w-full max-w-30rem search-input-container card p-2'>
                        <span className='search-input-wrapper flex flex-row w-full'>
                            <InputText
                                    value={ inputValue }
                                    onChange={ handleInputChange }
                                    placeholder='Search'
                                    className='w-full h-full search-input'
                            ></InputText>
                            <i className='bi bi-search h-24 p-2'/>
                        </span>
            </div>
    )
}
