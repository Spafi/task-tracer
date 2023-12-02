import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/arya-green/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./config/routerConfig.jsx";
import AuthWrapper from "./auth/AuthWrapper.jsx";
import ThemeProvider from "./theme/ThemeContext.jsx";
import './config/cssVariables.js'

export default function App() {
    return (
            <AuthWrapper>
                <PrimeReactProvider>
                    <ThemeProvider>
                        <RouterProvider router={ router }/>
                    </ThemeProvider>
                </PrimeReactProvider>
            </AuthWrapper>
    );
}
