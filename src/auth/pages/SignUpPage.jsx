import { SignUp } from "@clerk/clerk-react";
import { routePaths } from "../../config/routerConfig.jsx";

export default function SignUpPage() {
    return <div className='w-full flex align-items-center justify-content-center h-[80vh]'>
        <SignUp path={ routePaths.SIGN_UP }
                signInUrl={ routePaths.SIGN_IN }
        />
    </div>
}
