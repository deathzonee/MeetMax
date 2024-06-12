import PropTypes from "prop-types";
const ButtonCard = ({ className = "", children }) => {
  return (
    <button
      className={`md:px-6 2xl:px-10 px-10 py-[6px] rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};
ButtonCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
export default ButtonCard;
