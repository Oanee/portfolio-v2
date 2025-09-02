const Icon = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="duration-200 rounded-sm hover:scale-110 brightness-50 md:brightness-100"
    />
  );
};
export default Icon;
