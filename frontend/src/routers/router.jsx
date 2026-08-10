import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout/RootLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

import CartPage from "../pages/CartPage/CartPage";

// Auth Pages
import auth_router from "./auth_router";

import ProductDetails from "../components/Products/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "products/:id",
                element: <ProductDetails />
            },
            {
                path: "cart",
                element: <CartPage />
            },
            {
                path: "accounts",
                children : [
                    ...auth_router
                ]
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },

])

export default router;
