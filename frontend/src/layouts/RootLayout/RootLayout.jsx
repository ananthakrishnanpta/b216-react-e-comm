import { Outlet } from "react-router";
import './RootLayout.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function RootLayout() {
    return (
        <>
        <header className="fixed-top">
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="w-100 text-center text-info bg-dark">
            <Footer />
        </footer>
        </>
    )
}