import "./Navbar.css";

import { NavLink } from "react-router";
import useCart from "../../hooks/useCart";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

const Navbar = () => {
    const { totalItems } = useCart();

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top"
            data-bs-theme="dark"
        >
            <div className="container">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="navbar-brand fw-bold logo-glow"
                >
                    🍵 TeaShop
                </NavLink>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >

                    {/* Search */}
                    <form
                        className="d-flex mx-auto my-3 my-lg-0 navbar-search"
                        role="search"
                    >
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search tea..."
                        />

                        <button
                            className="btn btn-success ms-2"
                            type="submit"
                        >
                            <i className="bi bi-search"></i>
                        </button>
                    </form>

                    {/* Right Side */}
                    <ul className="navbar-nav align-items-lg-center ms-lg-auto">

                        <li className="nav-item me-lg-3">
                            <CurrencySelector />
                        </li>

                        <li className="nav-item me-lg-3">
                            <NavLink
                                to="/cart"
                                className="nav-link position-relative"
                            >
                                <i className="bi bi-cart3 fs-5"></i>

                                {totalItems > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {totalItems}
                                    </span>
                                )}
                            </NavLink>
                        </li>

                        {/* Profile */}
                        <li className="nav-item dropdown">

                            <a
                                href="#"
                                className="nav-link dropdown-toggle d-flex align-items-center"
                                data-bs-toggle="dropdown"
                            >
                                <div className="profile-avatar">
                                    <i className="bi bi-person-fill"></i>
                                </div>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end">

                                {/* <li>
                                    <NavLink
                                        to=""
                                        className="dropdown-item"
                                    >
                                        <i className="bi bi-person me-2"></i>
                                        Profile
                                    </NavLink>
                                </li> */}

                                {/* <li>
                                    <hr className="dropdown-divider" />
                                </li> */}

                                <li>
                                    <NavLink
                                        to="accounts/login"
                                        className="dropdown-item text-info"
                                    >
                                        <i className="bi bi-box-arrow-right me-2"></i>
                                        Login
                                    </NavLink>
                                </li>

                            </ul>

                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;