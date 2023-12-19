import { Link } from "react-router-dom";

export default function Footer() {

    const startYear = 2023
    const currentYear = new Date().getFullYear()
    const period = currentYear===startYear ? startYear.toString() : `${ startYear } - ${ currentYear }`

    return <div className='flex align-items-center justify-content-center'>
        <p>© { period } <Link to='https://github.com'>Constantin</Link></p>
    </div>
}
