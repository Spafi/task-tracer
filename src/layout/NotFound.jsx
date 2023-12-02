import { Link, useNavigate } from "react-router-dom";
import { routePaths } from "../config/routerConfig.jsx";

export default function NotFound() {

    const navigate = useNavigate();

    const goToPreviousPage = () => navigate( -1 )

    return (
            <div className='not-found flex align-items-center justify-content-center'>
                <div className='flex flex-column align-items-center'>
                    <p className='not-found-title font-bold'>404</p>
                    <p className='text-5xl'>Oops! Looks like you got lost</p>
                    <div className='flex gap-2 pt-4 text-xl'>
                        <p className='cursor-pointer text-primary hover:text-green-500'
                           onClick={ goToPreviousPage }>Back</p>
                        <p>|</p>
                        <Link className='cursor-pointer text-primary no-underline hover:text-green-500'
                              to={ routePaths.HOME }>Home</Link>
                    </div>
                </div>
            </div>
    )
}
