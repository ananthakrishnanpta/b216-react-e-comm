import './BasicInput.css';

const BasicInput = ({
    name,
    id,
    className = "",
    value,
    placeholder,
    type = "text",

    register,
    error
}) => {
    return (
        <div className="basic-input-wrapper mb-3">
            <label htmlFor={id} className="form-label fw-semibold">
                {name}
            </label>

            <input
                type={type}
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                className={`form-control ${className}`}
                {...register}
            />

            {error && (
                <div className='text-danger mt-1'>
                    {error.message}
                </div>
            )}
        </div>
    );
};

export default BasicInput;