import { Outlet } from "react-router";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function RootLayout() {
    return (
        <>
        <header className="fixed-top">
            <Navbar />
        </header>
        <main className="py-5">
            <Outlet />
        </main>
        <footer className="fixed-bottom w-100 text-center text-info bg-dark">
            <Footer />
        </footer>
        </>
    )
}