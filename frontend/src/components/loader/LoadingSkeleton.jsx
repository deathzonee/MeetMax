import PropTypes from "prop-types";
const LoadingSkeleton = ({
  className = "",
  width = "",
  height = "",
  radius = "",
}) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width: width || "100%",
        height: height,
        borderRadius: radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;

LoadingSkeleton.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
};
