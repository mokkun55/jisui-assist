type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export const BaseButton = ({
  label,
  onClick,
  disabled,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`bg-orange-400 text-white py-2 px-4 rounded-md 
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-orange-500 cursor-pointer"
        }`}
    >
      {label}
    </button>
  );
};
