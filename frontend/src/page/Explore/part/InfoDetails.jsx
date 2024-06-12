import PropTypes from "prop-types";
import { convertDatetime } from "../../../utils/convertDatetime";
import {
  ClockIcon,
  DocumentIcon,
  LocationIcon,
  LikeIcon,
  ShareIcon,
} from "../../../components/icons";
import { toast } from "react-toastify";
import { useState } from "react";

import styled from "styled-components";
import Button from "../../../components/button/Button";

const ButtonStyled = styled.div`
  .checked-true {
    background-color: rgb(132 175 255);
    color: rgb(24 102 249);
  }
`;

const InfoDetails = ({ category, datetime, location = "Empty", author }) => {
  const [like, setLike] = useState(false);

  const path = window.location.href;
  const copy = async () => {
    await navigator.clipboard.writeText(path);
    toast.success("Copied to clipboard", {
      toastClassName: "custom-toast",
      bodyClassName: "custom-toast-body",
    });
  };

  return (
    <div className="info-explore md:w-[260px] 2xl:w-[360px] flex flex-col md:gap-5 gap-[15px] text-white md:pl-[30px] pb-5 md:pb-0 relative">
      <span className="text-base font-medium pt-[18px] md:pt-0">Info</span>
      <span className="font-medium text-white text-opacity-40 text-bodyRegular">{`by ${author}`}</span>
      <ul className="flex flex-col gap-[14px] text-white text-opacity-90">
        <li>
          <DocumentIcon />
          <p>{category}</p>
        </li>
        <li>
          <ClockIcon />
          <p>{convertDatetime(datetime)}</p>
        </li>
        <li>
          <LocationIcon />
          <p>{location}</p>
        </li>
      </ul>
      <ButtonStyled className="flex md:gap-5 gap-[14px] h-10">
        {like ? (
          <Button
            onClick={() => setLike(false)}
            className="flex justify-center items-center gap-[10px] checked-true rounded-[6px]"
          >
            <LikeIcon />
            <p className="font-medium text-bodyBold">Interested</p>
          </Button>
        ) : (
          <Button
            onClick={() => setLike(true)}
            className="flex justify-center items-center gap-[10px] bg-darkColors2 text-white rounded-[6px]"
          >
            <LikeIcon />
            <p className="font-medium text-bodyBold">Interested</p>
          </Button>
        )}
        <Button
          onClick={copy}
          className="flex justify-center items-center !w-fit !p-3 shrink-0 bg-darkColors2 rounded-[6px]"
        >
          <ShareIcon />
        </Button>
      </ButtonStyled>
    </div>
  );
};

export default InfoDetails;

InfoDetails.propTypes = {
  category: PropTypes.string,
  datetime: PropTypes.string,
  location: PropTypes.string,
  author: PropTypes.string,
};
