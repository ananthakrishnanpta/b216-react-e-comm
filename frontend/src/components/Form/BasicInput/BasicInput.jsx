import './BasicInput.css';

const BasicInput = ({
    name,
    id,
    className = "",
    value,
    placeholder,
    type = "text",
    onChangeFunc = null
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
                className={"form-control " + {className}}
                onChange={onChangeFunc}
            />
        </div>
    );
};

export default BasicInput;