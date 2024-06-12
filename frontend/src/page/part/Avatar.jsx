import propTypes from "prop-types";
const Avatar = ({
  src = "https://source.unsplash.com/random",
  className = "",
}) => {
  return <img src={src} alt="" className={`flex-shrink-0 ${className}`} />;
};

export default Avatar;

Avatar.propTypes = {
  src: propTypes.string,
  className: propTypes.string,
};
