import "./Footer.css";
import { NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3 mt-auto">
            <div className="container">

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

                    <div>
                        © {new Date().getFullYear()} TeaShop
                    </div>

                    <div className="d-flex gap-4 mt-3 mt-md-0">

                        <NavLink
                            to="/about"
                            className="footer-icon"
                        >
                            <i className="bi bi-info-circle fs-5"></i>
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className="footer-icon"
                        >
                            <i className="bi bi-envelope fs-5"></i>
                        </NavLink>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;