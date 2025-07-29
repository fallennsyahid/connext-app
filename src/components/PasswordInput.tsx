import { useState } from "react";

interface PasswordInputProps {
  name: string;
  id: string | number;
  value: string;
  icon: string;
  placeholder: string;
  required: boolean;
  withToggle: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({
  name,
  id,
  value,
  onChange,
  placeholder,
  icon,
  required = true,
  withToggle = false,
}: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className={`fas ${icon} text-gray-500`}></i>
        </div>
        {withToggle && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <i
              className={`fas ${
                show ? "fa-eye-slash" : "fa-eye"
              } text-gray-500`}
            ></i>
          </div>
        )}
        <input
          type={show ? "text" : "password"}
          name={name}
          id={String(id)}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-3 py-3 bg-gray-600/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 transition-all"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
