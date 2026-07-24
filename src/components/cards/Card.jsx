// Card Props
const Card = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  padding = "normal",
}) => {
  const baseStyles =
    "rounded-[1.25rem] border border-emerald-100 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300";
  const variants = {
    default: "bg-white text-slate-700",
    primary:
      "flex pt-4 items-center border border-emerald-100 bg-white text-slate-700",
    success: "bg-emerald-50 border border-emerald-200 text-slate-700",
    dark: "bg-slate-900 text-white border border-slate-200",
  };

  const hoverStyles = hover
    ? "hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)]"
    : "";

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
