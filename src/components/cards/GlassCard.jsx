const GlassCard = ({
  children,
  className = "",
  variant = "",
  hover = true,
  padding = "",
}) => {

    //if hovered? do this
  const hoverStyles = hover ? "hover:shadow-xl hover:bg-red" : "";
  //paddings on diffent screens
  const paddingStyles = {
    none: "p-0",
    small: "p-2",
    normal: "p-4",
    large: "p-6",
  };

  const variants = {
    default: "bg-white text-black border-gray-200",
    dark: "bg-gray-800 text-white border border-gray-700",
  };

  const baseStyles =
    "rounded-lg backdrop-blur m-1 justify-center px-3  rounded-xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg flex items-center ";

  return (
    <div className={`${className} ${variants[variant]} ${baseStyles}${hoverStyles}${paddingStyles[padding]}`}>{children}</div>
  );
};

export default GlassCard;
