import React from "react";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  max,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        maxlength={max ? "7" : null}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormRow;
