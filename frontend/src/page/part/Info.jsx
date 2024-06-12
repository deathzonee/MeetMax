import propTypes from "prop-types";
const Info = ({
  src = "https://source.unsplash.com/random",
  name = "Sepural Gallerry",
  date = "15h. Public",
}) => {
  return (
    <div className="flex flex-shrink-0 items-center gap-[20px]">
      <img src={src} alt="" className="w-[50px] h-[50px] rounded-[28px]" />
      <div>
        <h2 className="text-white">{name}</h2>
        <span className="text-[#9baabd]">{date}</span>
      </div>
    </div>
  );
};

export default Info;

Info.propTypes = {
  src: propTypes.string,
  name: propTypes.string,
  date: propTypes.string,
};
