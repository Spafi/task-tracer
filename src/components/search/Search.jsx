import { InputText } from "primereact/inputtext";
import './Search.css'


export default function Search() {
    return (
            <div className='w-full max-w-30rem search-input-container card p-2'>
                        <span className='search-input-wrapper flex flex-row w-full'>
                            <InputText
                                    placeholder='Search'
                                    className='w-full h-full search-input'
                            ></InputText>
                            <i className='bi bi-search h-24 p-2'/>
                        </span>
            </div>
    )
}
