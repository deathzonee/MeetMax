import Chip from "./Chip";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LinkIcon } from "../../../components/icons/LinkIcon";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TextStyled =
  styled.h4 &&
  styled.h2`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `;

const Card = ({
  link = "",
  img = "https://source.unsplash.com/random",
  title = "How To Choose Best Bike For Spring In Bangladesh?",
  desc = "If you ever wish to buy a motorcycle for you than you must think a lot before buying...",
  datetime = "Friday 13 August",
}) => {
  return (
    <div className="bg-darkColors1 rounded-lg overflow-hidden md:max-w-[350px]">
      <Link to={link} className="block h-[200px]">
        <LazyLoadImage
          effect="blur"
          src={img}
          alt="Image blog"
          width={"100%"}
          className="h-[200px] w-full object-cover"
        />
      </Link>
      <div className="flex flex-col gap-[18px] p-[18px] h-[230px] justify-between">
        <span className="flex flex-col gap-[18px]">
          <div className="flex gap-[14px]">
            <Chip></Chip>
            <span className="text-bodyBold text-white text-opacity-40 font-medium">
              {datetime}
            </span>
          </div>
          <Link to={link} className="flex flex-col gap-[14px]">
            <TextStyled className="text-heading3Bold font-bold text-white">
              {title}
            </TextStyled>
            <TextStyled className="text-bodyBold font-normal text-white text-opacity-40">
              {desc}
            </TextStyled>
          </Link>
        </span>
        <Link
          to={link}
          className="uppercase text-blueColors flex w-fit gap-[14px] items-center"
        >
          <span className="font-medium text-bodyBold pt-[2px]">Read More</span>{" "}
          <LinkIcon></LinkIcon>{" "}
        </Link>
      </div>
    </div>
  );
};
Card.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  datetime: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
