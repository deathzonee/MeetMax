import { useForm } from "react-hook-form";
import Textarea from "../../../components/textarea/Textarea";
import {
  FeelingIcon,
  LiveVideoIcon,
  PhotoVideoIcon,
} from "../../../components/icons";
import Button from "../../../components/button/Button";
import propTypes from "prop-types";
import Avatar from "../../part/Avatar";
import styled from "styled-components";
const PostModalContentStyled = styled.div`
  width: 50vw;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 46.1875em) {
    width: 100%;
    & .form-post-modal {
      border-radius: 0;
    }

    & .input-post-modal {
      max-height: 100px;
    }

    & .btn-post-modal {
      border-radius: 10px;
      padding: 4px 15px !important;
    }
  }
`;

const PostModalContent = ({ post, setPost }) => {
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm();
  const onSubmitPost = (data) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(data);
      }, 5000);
    });
  };
  return (
    <PostModalContentStyled onClick={(e) => e.stopPropagation()}>
      <form
        onSubmit={handleSubmit(onSubmitPost)}
        className="form-post-modal bg-darkColors1 p-[18px] rounded-[16px] text-white mb-[30px]"
      >
        <div className="flex items-center gap-[14px] mb-[18px]">
          <Avatar className="w-[42px] h-[42px] rounded-[25px]"></Avatar>
          <div className="w-full">
            <Textarea
              id="post"
              name="post"
              value={post}
              setValue={setPost}
              placeholder="What' s happening?"
              className="input-post-modal rounded-[10px] max-h-[150px]  p-[10px] placeholder:text-bodyBold"
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
            isSubmitting={isSubmitting}
            className="btn-post-modal  text-displayMedium flex items-center justify-center !px-[30px] !py-[8px] "
          >
            Post
          </Button>
        </div>
      </form>
    </PostModalContentStyled>
  );
};

PostModalContent.propTypes = {
  post: propTypes.string,
  setPost: propTypes.string,
  handleSubmit: propTypes.string,
  onSubmitPost: propTypes.string,
};

export default PostModalContent;
