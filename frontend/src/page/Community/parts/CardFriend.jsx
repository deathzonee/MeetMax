import { NavLink } from "react-router-dom";
import {
  ExploreIcon,
  FacebookIcon,
  InstagramIcon,
  TwiterIcon,
} from "../../../components/icons";
import Avatar from "../../part/Avatar";
import ButtonCard from "./ButtonCard";
import PropTypes from "prop-types";
const listInfo = [
  {
    id: 1,
    icon: <ExploreIcon></ExploreIcon>,

    url: "/explore",
  },

  {
    id: 2,
    icon: <FacebookIcon></FacebookIcon>,
    url: "/facebook",
  },
  {
    id: 3,
    icon: <TwiterIcon></TwiterIcon>,
    url: "/twitter",
  },
  {
    id: 4,
    icon: <InstagramIcon></InstagramIcon>,
    url: "/instagram",
  },
];
const CardFriend = ({
  name = "Radovan SkillArena",
  desc = "Founder & CEO at Trophy",
  buttonTextLeft = "Ignore",
  buttonTextRight = "Follow",
}) => {
  return (
    <div className="grid grid-cols-1 md:gap-[15px] md:grid-cols-3 2xl:grid-cols-4 ">
      {Array(12)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="w-full bg-darkColors1 px-[12px] py-[15px] rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.02)] backdrop-blur-[25px] "
          >
            <div className="flex items-center gap-[15px] mb-7">
              <Avatar className="w-[60px] h-[60px] rounded-full  object-cover"></Avatar>
              <div className="flex flex-col font-medium line-clamp-3 gap-[14px]">
                <div className="flex flex-col gap-1">
                  <h1 className="text-white line-clamp-1 text-displayBold">
                    {name}
                  </h1>
                  <span className="line-clamp-1 text-bodyRegular text-[#979EAC]">
                    {desc}
                  </span>
                </div>
                <div className="items-center hidden gap-4 md:flex">
                  {listInfo.map((item) => (
                    <NavLink key={item.id} to={item.url}>
                      {item.icon}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5">
              <ButtonCard className="border border-[#979EAC] text-[#979EAC]">
                {buttonTextLeft}
              </ButtonCard>
              <ButtonCard className="text-white bg-blueColors text-displayMedium">
                {buttonTextRight}
              </ButtonCard>
            </div>
          </div>
        ))}
    </div>
  );
};

CardFriend.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  buttonTextLeft: PropTypes.string,
  buttonTextRight: PropTypes.string,
};
export default CardFriend;
