interface ButtonProps {
  style: string;
  label?: string;
  onClick?: (event: any) => void;
}

export const Button: React.FC<ButtonProps> = ({
  style,
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 text-white ${style} rounded-lg`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
