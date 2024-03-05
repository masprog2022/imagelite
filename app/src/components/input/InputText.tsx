interface InputTextProps {
  style?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  style,
  type = "text",
  ...rest
}: InputTextProps) => {
  return (
    <input
      type={type}
      {...rest}
      className={`${style} border px-3 py-2 rounded-lg text-gray-900`}
    />
  );
};
