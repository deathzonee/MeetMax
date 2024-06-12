import Avatar from "../../part/Avatar";
import propTypes from "prop-types";
function InteractiveBar({ comments = 3, share = 17 }) {
  return (
    <div className="flex items-center justify-between text-white cursor-pointer">
      <Avatar className="w-[22px] h-[22px] rounded-[22px]"></Avatar>
      <div className="flex gap-[17px]">
        <span>{comments} comments</span>
        <span>{share} share</span>
      </div>
    </div>
  );
}

export default InteractiveBar;

InteractiveBar.propTypes = {
  comments: propTypes.number,
  share: propTypes.number,
};
