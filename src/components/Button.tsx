type ButtonVariant = "black" | "blue" | "green" | "white";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({
  variant = "black",
  children,
  className,
  ...props
}: ButtonProps) => {
  let variantClasses = "";

  switch (variant) {
    case "blue":
      variantClasses =
        "bg-[#155DFC] hover:bg-[#003ab8] cursor-pointer rounded-md text-[#FDFEFF] p-3";
      break;
    case "green":
      variantClasses =
        " bg-[#48BC5D] text-white hover:bg-gray-100 hover:text-[#20974d] transition-colors duration-400 cursor-pointer rounded-md px-4 py-2 text-lg";
      break;
    case "white":
      variantClasses =
        " bg-white text-blue-600 hover:bg-blue-300 hover:text-white transition-colors duration-400 cursor-pointer rounded-md px-4 py-2 text-lg";
      break;
    case "black":
    default:
      variantClasses =
        "bg-[#171717] hover:bg-[#303030] px-4 py-2 rounded-md text-[#FDFEFF] font-bold cursor-pointer text-[14px] hidden md:flex items-center gap-2";
      break;
  }

  return (
    <button className={`${variantClasses} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};
