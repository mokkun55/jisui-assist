type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  variant?: "primary" | "gray";
};

export const BaseButton = ({
  label,
  onClick,
  disabled,
  type = "button",
  className,
  variant = "primary",
}: Props) => {
  const baseStyles = "text-white py-2 px-4 rounded-md";
  const variantStyles = {
    primary: "bg-orange-400 hover:bg-orange-500",
    gray: "bg-gray-400 hover:bg-gray-500",
  };

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]}
        ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } ${className}`}
    >
      {label}
    </button>
  );
};
