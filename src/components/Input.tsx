// import { useState } from "react";

import type React from "react";

interface InputProps {
  type: "text" | "number" | "tel" | "email" | "password";
  id: string | number;
  name: string;
  placeholder: string;
  value: string | number;
  icon?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  id,
  name,
  icon,
  placeholder,
  value,
  required = true,
  onChange,
}: InputProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
        <i className={`fas ${icon} text-gray-500`}></i>
      </div>
      <input
        type={type}
        id={String(id)}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-3 py-3 bg-gray-600/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 transition-all"
      />
    </div>
  );
};

export default Input;
