import BasicInput from "../../BasicInput/BasicInput";
import PasswordInput from "../PasswordInput/PasswordInput";

import { useForm } from "react-hook-form";

const SignupForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch("password");

    const onSubmit = (data) => {
        console.log("Form submitted.");
        console.log(data);
    }

    return (
        <div>
            <h2 className="mb-4">Create Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

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

                {/* Password */}
                <PasswordInput
                    id="password"
                    name="Password"
                    placeholder="Enter your password"
                    register={
                        register("password",
                        {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be atleast 8 characters."
                            }
                        })
                    }
                    error = {errors.password}
                />

                <PasswordInput
                    id="confirmPassword"
                    name="Confirm Password"
                    placeholder="Confirm your password"
                    register = {
                        register(
                            "confirmPassword", {
                                required : "Please confirm your password.",
                                validate: (value) => 
                                    value === password || "Passwords do not match"
                            })}
                            error = {errors.confirmPassword}
                />

                <button
                    type="button"
                    className="btn btn-primary w-100 mt-2"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupForm;