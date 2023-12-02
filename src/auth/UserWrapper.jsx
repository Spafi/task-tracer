import { useUser } from "@clerk/clerk-react";
import { saveUser } from "./UserService.js";
import { useEffect } from "react";

export default function UserWrapper({ children }) {

    const { isSignedIn, user } = useUser()

    const loginUserOnServer = user => isSignedIn && saveUser( user )

    useEffect( () => {
        loginUserOnServer( user )
    }, [ isSignedIn ] );

    return children
}
