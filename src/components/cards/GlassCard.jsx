const GlassCard = ({
  children,
  className = "",
  variant = "",
  hover = true,
}) => {
  //if hovered? do this
  const hoverStyles = hover ? "hover:shadow-xl hover:bg-red" : "";
  //paddings on diffent screens
  const sizeStyles = "m-1 px-3 py-4 md:px-6 md:py-8";
  const variants = {
    default: "bg-white text-black border-gray-200",
    dark: "bg-gray-800 text-white border border-gray-700",
  };

  const baseStyles =
    "flex rounded-lg space-y-2 backdrop-blur px-3 py-4  rounded-xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg  flex-col items-center relative w-5/6 sm:w-20/21 ";

  return (
    <div
      className={`${className} ${variants[variant]} ${baseStyles} ${sizeStyles} ${hoverStyles}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
