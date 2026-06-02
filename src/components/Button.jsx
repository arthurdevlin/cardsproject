const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full font-medium transition-colors duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:transition-transform hover:duration-300 hover:scale-105 hover:shadow-lg";

  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-900 border border-blue-900 hover:bg-blue-50",
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
