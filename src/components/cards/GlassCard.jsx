const GlassCard = ({
  children,
  className = "",
  variant = "",
  hover = true,
}) => {
  //if hovered? do this
  const hoverStyles = hover
    ? "hover:-translate-y-1 hover:border-emerald-300/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]"
    : "";
  const sizeStyles = "m-1 px-3 py-4 md:px-6 md:py-8";
  const variants = {
    default: "bg-slate-900/80 text-slate-100 border-white/10",
    dark: "bg-slate-950/90 text-white border border-white/10",
  };

  const baseStyles =
    "flex rounded-[1.5rem] space-y-2 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(2,8,23,0.35)] bg-slate-900/80 flex-col m-4 items-center relative w-5/6 sm:w-20/21 ";

  return (
    <div
      className={`${className} ${variants[variant]} ${baseStyles} ${sizeStyles} ${hoverStyles}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
