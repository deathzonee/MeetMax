import { useState } from "react";
import Button from "../../../components/button/Button";
import Avatar from "../../part/Avatar";
import styled from "styled-components";
import Textarea from "../../../components/textarea/Textarea";
import {
  FeelingIcon,
  LiveVideoIcon,
  PhotoVideoIcon,
} from "../../../components/icons";
import PostModalContent from "./PostModalContent";
const PostStyled = styled.form`
  position: relative;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(33, 40, 48, 0.8);
    z-index: 1000;
  }

  @media (max-width: 46.1875em) {
    padding: 14px 20px;
    font-size: 12px;
    line-height: 18px;
    border-radius: 0px;
    & .post-bar {
      font-weight: 500;
      display: flex;
      gap: 24px;
    }

    & .btn-post {
      width: 58px;
      height: 30px;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      padding: 4px 14px;
      border-radius: 10px;
    }

    & .input-post {
      padding: 7px 10px;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;

const CreatePost = () => {
  const [post, setPost] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleInput = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <PostStyled
      post={post}
      className="form-post bg-darkColors1 p-[18px] rounded-[16px] text-white"
    >
      <div className="flex items-center gap-[14px] mb-[18px]">
        <Avatar className="w-[42px] h-[42px] rounded-[25px]"></Avatar>
        <div className="w-full">
          <Textarea
            id="post"
            name="post"
            value={post}
            placeholder="What' s happening?"
            onclick={handleInput}
            className="input-post rounded-[10px] max-h-[56px] p-[10px] placeholder:text-bodyBold"
          ></Textarea>
        </div>
      </div>

      <div className="flex items-center justify-between text-white post-bar">
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-[10px]">
            <LiveVideoIcon></LiveVideoIcon>
            <span>Live</span>
          </div>
          <label className="flex items-center gap-[10px]" htmlFor="filePost">
            <input type="file" className="hidden" id="filePost" />
            <PhotoVideoIcon></PhotoVideoIcon>
            <span>Photo</span>
          </label>

          <div className="flex items-center gap-[10px]">
            <FeelingIcon></FeelingIcon>
            <span>Feeling</span>
          </div>
        </div>

        <Button
          type="submit"
          name="post"
          className="btn-post text-displayMedium flex items-center justify-center !px-[30px] !py-[8px] !w-[92px]"
        >
          Post
        </Button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <PostModalContent post={post} setPost={setPost} />
        </div>
      )}
    </PostStyled>
  );
};

export default CreatePost;
