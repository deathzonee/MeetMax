import { useState } from "react";
import {
  CommentsIcon,
  LikeColorIcon,
  LikeIcon,
  ShareIcon,
} from "../../../components/icons";
import styled from "styled-components";
const IncreasesInteractionStyled = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 14px 0;
  cursor: pointer;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    flex: 1;
    width: 100%;
    background-color: #212833;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;
const IncreasesInteraction = () => {
  const [like, setLike] = useState(false);
  const handleChangeLike = () => {
    setLike(!like);
  };
  return (
    <IncreasesInteractionStyled>
      <div className="w-full flex items-center justify-between my-[11px]">
        <div
          className="flex items-center gap-[10px]"
          onClick={handleChangeLike}
        >
          {like ? <LikeColorIcon /> : <LikeIcon />}
          <span className={like ? "text-blue-500" : ""}>Like</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <CommentsIcon /> <span>Comments</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <ShareIcon /> <span>Share</span>
        </div>
      </div>
    </IncreasesInteractionStyled>
  );
};

export default IncreasesInteraction;
