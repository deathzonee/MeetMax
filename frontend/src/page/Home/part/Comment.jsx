import { useForm } from "react-hook-form";
import Avatar from "../../part/Avatar";
import {
  GifIcon,
  PictureIcon,
  SendIcon,
  SmileIcon,
} from "../../../components/icons";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import styled from "styled-components";
const CommentStyled = styled.form`
  @media (max-width: 46.1875em) {
    z-index: 10000;
  }
`;
const Comment = () => {
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    reset({
      comment: "",
      filePicture: "",
      fileGift: "",
    });
    console.log(data);
  };

  return (
    <CommentStyled
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-[14px] text-white cursor-pointer"
    >
      <Avatar className="w-[38px] h-[38px] rounded-[25px]"></Avatar>
      <div className="relative flex-grow">
        <Input
          id="comments"
          name="comment"
          control={control}
          placeholder="Write a comment..."
          className="border-none !pl-[10px] !pr-[100px] !py-[8px] placeholder:text-bodyBold z-0"
        ></Input>

        <div className="absolute flex items-center gap-[14px] right-[14px] top-1/2  -translate-y-1/2  cursor-pointer ">
          <label htmlFor="filePicture">
            <Input
              id="fileGift"
              name="fileGift"
              type="file"
              control={control}
              className="hidden"
            />
            <GifIcon></GifIcon>
          </label>
          <label htmlFor="filePicture">
            <Input
              id="filePicture"
              name="filePicture"
              type="file"
              control={control}
              className="hidden"
            />
            <PictureIcon></PictureIcon>
          </label>

          <SmileIcon></SmileIcon>
        </div>
      </div>

      <Button className="bg-darkColors2 !p-[11px] !rounded-[5px]" type="submit">
        <SendIcon></SendIcon>
      </Button>
    </CommentStyled>
  );
};

export default Comment;
