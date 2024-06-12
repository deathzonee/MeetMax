import propTypes from "prop-types";
import Avatar from "../../part/Avatar";
import { EllipsisIcon, SearchIcon } from "../../../components/icons";
import InputSecondary from "../../../components/input/InputSecondary";

const RightBarFriend = ({
  title = "Friends",
  nameFriend = "Kayleigh bysouth",
}) => {
  return (
    <div className="w-[250px] bg-darkColors1 fixed md:flex flex-col top-[78px] right-0 h-full p-[20px] text-white hidden overflow-y-auto scrollbar-hidden">
      <InputSecondary
        type="text"
        placeholder="Search Friends!"
        className="w-full px-[20px] py-[13px] pl-[45px] bg-transparent rounded-[10px] border border-white"
      >
        <SearchIcon></SearchIcon>
      </InputSecondary>

      <div className="flex items-center justify-between my-[20px] ">
        <h2>{title}</h2>
        <EllipsisIcon></EllipsisIcon>
      </div>
      <div className="flex flex-col gap-[18px]">
        {Array(30)
          .fill(0)
          .map((item, index) => (
            <div key={index} className="flex items-center gap-[20px]">
              <Avatar className="w-[40px] h-[40px] rounded-[40px] object-cover"></Avatar>
              <span>{nameFriend}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RightBarFriend;

RightBarFriend.propTypes = {
  title: propTypes.string,
  nameFriend: propTypes.string,
};
