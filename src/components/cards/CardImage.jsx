export const CardImage = ({
  src = null,
  alt = "Card Image",
  className = "",
}) => {
  
//If src is provided, render the image, otherwise render a placeholder
  return (
    <div className={`w-full h-48 overflow-hidden rounded-t-lg ${className}`}>
      
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-linear-to-r from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-400 text-sm">No Image for now</span>
        </div>
      )}
    </div>
  );
};
export default CardImage;
