import React from "react";

export default function Input({
  name,
  type,
  label,
  hasError = false,
  errorMsg = "An error occured",
}) {
  const borderColor = hasError ? "border-red-400" : "border-gray-700";

  return (
    <div>
      <input
        class={`appearance-none border ${borderColor} rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
        name={name}
        type={type}
        placeholder={label}
      />
      {hasError ? <div className="text-sm text-red-400">{errorMsg}</div> : null}
    </div>
  );
}
