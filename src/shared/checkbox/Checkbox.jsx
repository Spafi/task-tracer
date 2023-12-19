import './Checkbox.css'

export default function Checkbox({ value, onChecked }) {

    const handleCheckboxChange = (event) => {
        onChecked( event.target.checked );
    };


    return (
            <label className='checkbox-container'>
                <input type='checkbox'
                       onChange={ handleCheckboxChange }
                       checked={ value }/>
                <div className='checkmark'>
                    <svg width="24px" height="24px" viewBox="0 0 18 18">
                        <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                        <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                </div>
            </label>
    )
}
