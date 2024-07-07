import React from "react";

const Selector = ({ options, name, value, onChange, width, label, error, required = false }) => {
  let styles = {
    width: `${width}px`,
  };

  return (
    <div className="flex flex-col justify-center items-start w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-600 relative"
        >
          {required && <span className="text-red-500 absolute right-[-10px]">*</span>} {label}
        </label>
      )}
      <select
        name={name}
        id={`${name}-select`}
        value={value}
        style={styles}
        onChange={(event) => onChange(event)}
        className="py-2 px-1 border border-2 border-gray-300 rounded-lg"
      >
        {options?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Selector;
