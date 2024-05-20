import React from "react";

function InputField({ label, value, onChange, placeholder, ...props }) {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}

export default InputField;
