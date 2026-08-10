import BasicInput from "../../BasicInput/BasicInput";
import PasswordInput from "../PasswordInput/PasswordInput";

const LoginForm = () => {
    return (
        <form className="container mt-4">
            <h2 className="mb-4">Login</h2>

            <BasicInput
                id="email"
                name="Email"
                type="email"
                placeholder="Enter your email"
            />

            <PasswordInput
                id="password"
                name="Password"
                placeholder="Enter your password"
            />

            <button
                type="submit"
                className="btn btn-primary w-100 mt-2"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;