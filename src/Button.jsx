const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-6 py-1 cursor-pointer rounded-full transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white hover:shadow-lg";

  const variants = {
    primary: "border border-white text-white hover:bg-white hover:text-black",
    secondary:
      "bg-white text-black hover:bg-transparent hover:text-white hover:border hover:border-white",
    wierd:
      "bg-green-950 text-white hover:bg-white hover:text-green-950 hover:border hover:border-green-950",
    variant: "ring-2 hover:text-white hover:bg-green-900",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
