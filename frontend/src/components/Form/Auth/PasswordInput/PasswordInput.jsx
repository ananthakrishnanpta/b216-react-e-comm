import BasicInput from "../../BasicInput/BasicInput";

const PasswordInput = ({ id, name, ...props }) => {
    return (
        <BasicInput
            id={id}
            name={name}
            type="password"
            {...props}
        />
    );
};

export default PasswordInput;