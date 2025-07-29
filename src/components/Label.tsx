interface LabelProps {
  text: string | number;
  htmlFor: string;
}

const Label = ({ htmlFor, text }: LabelProps) => {
  return (
    <label
      htmlFor={String(htmlFor)}
      className="block text-gray-300 font-medium text-sm mb-2"
    >
      {text}
    </label>
  );
};

export default Label;
