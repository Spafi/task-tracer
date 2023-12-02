import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SignInPage from "../auth/pages/SignInPage.jsx";
import SignUpPage from "../auth/pages/SignUpPage.jsx";
import NotFound from "../layout/NotFound.jsx";
import Homepage from "../homepage/Homepage.jsx";
import RootLayout from "../layout/RootLayout.jsx";

export const routePaths = {
    HOME   : '/',
    SIGN_IN: 'sign-in',
    SIGN_UP: 'sign-up',
}

export const routes = [
    {
        path: routePaths.HOME, name: 'Home', element: <Homepage/>
    }, { path: routePaths.SIGN_IN, name: 'Sign In', element: <SignInPage/> },
    { path: routePaths.SIGN_UP, name: 'Sign Up', element: <SignUpPage/> },
    { path: '*', name: 'Not Found', element: <NotFound/> },
]

export const router = createBrowserRouter(
        createRoutesFromElements(
                <Route path={ routePaths.HOME } element={ <RootLayout/> }>
                    { routes.map( (route, index) =>
                                          <Route key={ index }
                                                 path={ route.path }
                                                 element={ route.element }/> ) }
                </Route>
        )
)
