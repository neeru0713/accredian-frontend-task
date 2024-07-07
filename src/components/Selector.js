import React from "react";

const Selector = ({ options, name, value, onChange, width, label }) => {
  let styles = {
    width: `${width}px`,
  };

  return (
    <div className="flex flex-col justify-center items-start w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-600"
        >
          {label}
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
    </div>
  );
};

export default Selector;
