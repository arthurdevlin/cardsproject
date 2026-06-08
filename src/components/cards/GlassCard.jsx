const GlassCard = ({
  children,
  className = "",
  variant = "",
  hover = true,
}) => {

    //if hovered? do this
  const hoverStyles = hover ? "hover:shadow-xl hover:bg-red" : "";
  //paddings on diffent screens


  const variants = {
    default: "bg-white text-black border-gray-200",
    dark: "bg-gray-800 text-white border border-gray-700",
  };

  const baseStyles =
    "rounded-lg backdrop-blur  justify-center px-3 py-4  rounded-xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg flex md:flex-row flex-col items-center  w-full";

  return (
    <div className={`${className} ${variants[variant]} ${baseStyles}${hoverStyles}`}>{children}</div>
  );
};

export default GlassCard;
