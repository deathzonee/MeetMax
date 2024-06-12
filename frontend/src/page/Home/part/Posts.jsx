import { EllipsisIcon } from "../../../components/icons";
import Info from "../../part/Info";
import Comment from "./Comment";
import InteractiveBar from "./InteractiveBar";
import PostPicture from "./PostPicture";
import IncreasesInteraction from "./IncreasesInteraction";
const Posts = () => {
  return (
    <div className="bg-darkColors1 p-[18px] md:rounded-[16px] rounded-[0px]">
      <div className="flex items-center justify-between mb-[18px]">
        <Info></Info>
        <EllipsisIcon></EllipsisIcon>
      </div>

      <div className="flex gap-[15px] mb-[18px]">
        <PostPicture className="w-full max-h-screen roudned-[16px]"></PostPicture>
      </div>

      <InteractiveBar></InteractiveBar>
      <IncreasesInteraction></IncreasesInteraction>
      <Comment></Comment>
    </div>
  );
};

export default Posts;
