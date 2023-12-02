import { Link } from "react-router-dom";

export default function Footer() {

    const startYear = 2023
    const currentYear = new Date().getFullYear()
    const period = currentYear===startYear ? startYear.toString():`${ startYear } - ${ currentYear }`

    return <div className='flex items-center justify-center backdrop-blur py-4 text-secondary tracking-widest font-semibold'>
        <p>© { period } <Link to='https://github.com/Spafi'>Spaf</Link></p>
    </div>
}
