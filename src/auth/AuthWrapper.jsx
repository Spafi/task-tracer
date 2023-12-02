import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-react";
import UserWrapper from "./UserWrapper.jsx";
import { cssVariables } from "../config/cssVariables.js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const disableAuth = import.meta.env.VITE_DISABLE_AUTH==='true'

if ( !disableAuth && !import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ) {
    throw new Error( "Missing Clerk Publishable Key" )
}

export default function AuthWrapper({ children }) {

    if ( disableAuth ) return children

    return <ClerkProvider publishableKey={ clerkPubKey }
                          children={ children }
                          appearance={ {
                              layout   : {
                                  socialButtonsPlacement: 'top',
                                  socialButtonsVariant  : 'auto',
                              },
                              variables: {
                                  colorPrimary                : cssVariables.primary,
                                  colorTextOnPrimaryBackground: cssVariables.background,
                                  colorText                   : cssVariables.text,
                                  colorTextSecondary          : cssVariables.secondary,
                                  colorBackground             : cssVariables.background,
                                  colorInputText              : cssVariables.text,
                                  colorInputBackground        : cssVariables.selection,
                                  fontFamily                  : cssVariables.fontFamily,
                                  colorAlphaShade             : cssVariables.secondary,
                                  borderRadius                : '0px',
                                  fontSize                    : '1.2rem'
                              }
                          } }>
        <ClerkLoaded>
            <UserWrapper>
                { children }
            </UserWrapper>
        </ClerkLoaded>
    </ClerkProvider>
}
