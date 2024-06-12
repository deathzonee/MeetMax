import PropTypes from "prop-types";
const PostPicture = ({ className }) => {
  return (
    <img
      src="https://source.unsplash.com/random"
      alt=""
      className={` rounded-[16px] object-cover ${className}`}
    ></img>
  );
};

export default PostPicture;

PostPicture.propTypes = {
  className: PropTypes.string,
};
