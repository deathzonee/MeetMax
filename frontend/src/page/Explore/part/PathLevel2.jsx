import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PathLevel2 = ({ title1 = "Explore", title2 = "Add new", to1, to2 }) => {
  return (
    <span className="text-bodyBold font-medium text-white">
      <Link to={to1} className="text-[#fff] text-opacity-60">
        {title1}
        {"/"}
      </Link>
      <Link to={to2}>{title2}</Link>
    </span>
  );
};

export default PathLevel2;

PathLevel2.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
};
