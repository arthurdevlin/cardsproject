const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-3 py-1 cursor-pointer rounded-full transition-colors duration-300 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white hover:transition-transform hover:duration-300 hover:scale-105 hover:shadow-lg";

  const variants = {
    primary: "border border-white text-white hover:bg-white hover:text-black",
    secondary: "bg-white text-black ",
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
