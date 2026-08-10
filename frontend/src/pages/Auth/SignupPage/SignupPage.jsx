import SignupForm from "../../../components/Form/Auth/SignupForm/SignupForm";

const SignupPage = () => {
    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-10 col-md-6 col-lg-5">
                <SignupForm />
            </div>
        </div>
    );
};

export default SignupPage;