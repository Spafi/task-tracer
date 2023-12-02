import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function RootLayout() {
    return (
            <>
                <header>
                    <Navbar/>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </>
    )
}
