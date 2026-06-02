// Card Props
const Card = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  padding = "normal",
}) => {
  const baseStyles = "rounded-lg shadow-md transition-all duration-300";
  //variants for the card component that can be used to change the background color and border color
  const variants = {
    default: "bg-white border border-gray-200",
    primary: "bg-blue-100 border border-blue-200",
    success: "bg-green-100 border border-green-200",
    dark: "bg-gray-800 text-white border border-gray-700",
  };

  const hoverStyles = hover ? "hover:shadow-xl hover:translate-y-1" : "";

  const paddingStyles = {
    none: "p-0",
    small: "p-2",
    normal: "p-4",
    large: "p-6",
  };

  return (
    <div
      // render the card component with the appropriate styles based on the props passed in
      className={`${baseStyles} ${paddingStyles[padding]} ${className} ${hoverStyles} ${variants[variant]}`}
    >
      {children}
    </div>
  );
};

export default Card;
