interface ButtonProps {
  style: string;
  label?: string;
  onClick?: (event: any) => void;
  type?: "submit" | "button" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  style,
  label,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 text-white ${style} rounded-lg`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
