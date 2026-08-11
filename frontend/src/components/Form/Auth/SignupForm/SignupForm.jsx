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
                    register = {
                        register('firstName')
                    }
                    error = {errors.firstName}
                />

                <BasicInput
                    id="lastName"
                    name="Last Name"
                    placeholder="Enter your last name"
                    register={register('lastName')}
                    error={errors.lastName}
                />

                <BasicInput
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="Enter your email"
                    register={
                        register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email address"
                            }
                        })
                    }
                />

                {/* Password */}
                <PasswordInput
                    id="password"
                    name="Password"
                    placeholder="Enter your password"
                    register={
                        register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters."
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                                message: "Password must contain uppercase, lowercase, number and special character."
                            }
                        })
                    }
                    error={errors.password}
                />

                <PasswordInput
                    id="confirmPassword"
                    name="Confirm Password"
                    placeholder="Confirm your password"
                    register={
                        register(
                            "confirmPassword", {
                            required: "Please confirm your password.",
                            validate: (value) =>
                                value === password || "Passwords do not match"
                        })}
                    error={errors.confirmPassword}
                />

                <button
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupForm;