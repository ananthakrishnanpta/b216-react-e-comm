import LoginPage from "../pages/Auth/LoginPage/LoginPage";
import SignupPage from "../pages/Auth/SignupPage/SignupPage";

const auth_router = [
    {
        path : 'login',
        element : <LoginPage />
    },
    {
        path : 'signup',
        element : <SignupPage />
    }
]

export default auth_router;