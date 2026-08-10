import { Link } from "react-router";
import LoginForm from "../../../components/Form/Auth/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
                <LoginForm />

                <p className="text-center mt-3">
                    Don't have an account?{" "}
                    <Link to="/accounts/signup">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;