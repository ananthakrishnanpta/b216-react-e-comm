import { Outlet } from "react-router";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function XLayout() {
    return (
        <>
        
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
        <header>
            <Navbar />
        </header>
        </>
    )
}