interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  color: string;
  icon?: string;
  ring?: string;
  width?: string;
  disable?: boolean;
  onClick?: () => void;
}

const Button = ({
  type,
  text,
  icon,
  onClick,
  color,
  ring,
  width,
  disable,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disable}
      className={`py-3 px-5 ${width} cursor-pointer ${color} rounded-lg text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:${ring} focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5`}
    >
      <i className={`fas ${icon} mr-2`}></i> {text}
    </button>
  );
};

export default Button;
