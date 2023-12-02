import { SignIn } from "@clerk/clerk-react";
import { routePaths } from "../../config/routerConfig.jsx";

export default function SignInPage() {
    return <div className='w-full flex align-items-center justify-content-center h-[80vh]'>
        <SignIn path={ routePaths.SIGN_IN }
                signUpUrl={ routePaths.SIGN_UP }
        />
    </div>
}
