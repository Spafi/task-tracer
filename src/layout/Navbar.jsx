import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { routePaths } from "../config/routerConfig.jsx";
import './Navbar.css'
import Switch from "../shared/switch/Switch.jsx";

export default function Navbar() {
    const { isSignedIn, user } = useUser()

    const renderUserRelatedLink = () => {
        if ( isSignedIn ) {
            return (
                    <div className='user-details card'>
                        <div>Hello, <span className='font-semibold'>{ user.firstName }</span></div>
                        <UserButton afterSignOutUrl={ routePaths.HOME }></UserButton>
                    </div>
            )
        }
        return (
                <SignInButton mode={ 'modal' } className='sign-in-button'>
                    <button>
                        <i className='bi bi-person text-xl'></i>
                    </button>
                </SignInButton>
        )
    }
    return (
            <nav className='navbar'>
                <Switch/>
                { renderUserRelatedLink() }
            </nav>
    );
}
