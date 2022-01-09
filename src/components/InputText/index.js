import React from "react";

function InputText(
  { title, type, name, placeholder, onChange, errors, value },
  ref
) {
  return (
    <div>
      <label
        className="text-gray-800 font-semibold block my-3 text-md capitalize"
        htmlFor={name}
      >
        {title ? title : name}
      </label>
      <input
        className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        type={type ? type : "text"}
        defaultValue={value ? value : ""}
        name={name}
        id={name}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
      />
      {errors && (
        <div className="text-xs text-red-500 font-bold">{name} is Required</div>
      )}
    </div>
  );
}

export default React.forwardRef(InputText);
