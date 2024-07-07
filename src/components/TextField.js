import React from "react";

const TextField = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  color = "black",
  date,
  id,
  checked,
  children,
  width,
  checkBoxWeight,
  checkBoxHeight,
  label,
  inputWidth,
  error,
  required = false,
}) => {

  let styles = {
    width: `${width}`,
  };

  let inputStyles = {
    color: color,
    width: `${inputWidth}px`,
  };

  if (type === "checkbox") {
    inputStyles = {
      ...inputStyles,
      height: `${checkBoxHeight}rem`,
      width: `${checkBoxWeight}rem`,
    };
  }

  const inputChangeHandler = (event) => {
    if (type === "checkbox") {
      onChange(name);
    } else {
      onChange(event);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start" style={styles}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-600 relative"
        >
         {required && <span className="text-red-500 absolute right-[-10px]">*</span>} {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        style={inputStyles}
        date={date}
        id={id}
        placeholder={placeholder}
        onChange={inputChangeHandler}
        className="p-1 border border-2 border-gray-300 rounded-lg"
      />
      {children}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default TextField;
