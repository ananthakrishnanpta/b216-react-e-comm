import BasicInput from "../../BasicInput/BasicInput";
import PasswordInput from "../PasswordInput/PasswordInput";

const SignupForm = () => {
    return (
        <div>
            <h2 className="mb-4">Create Account</h2>

            <BasicInput
                id="firstName"
                name="First Name"
                placeholder="Enter your first name"
            />

            <BasicInput
                id="lastName"
                name="Last Name"
                placeholder="Enter your last name"
            />

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

            <PasswordInput
                id="confirmPassword"
                name="Confirm Password"
                placeholder="Confirm your password"
            />

            <button
                type="button"
                className="btn btn-primary w-100 mt-2"
            >
                Sign Up
            </button>
        </div>
    );
};

export default SignupForm;