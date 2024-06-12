import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Avatar = ({
  classNameLink = "",
  classNameImg = "",
  link = "/",
  srcImg = "https://source.unsplash.com/random",
}) => {
  return (
    <Link to={link} className={classNameLink}>
      <img className={classNameImg} src={srcImg} alt="image" />
    </Link>
  );
};

export default Avatar;

Avatar.propTypes = {
  classNameLink: PropTypes.string,
  classNameImg: PropTypes.string,
  link: PropTypes.string,
  srcImg: PropTypes.string,
};
