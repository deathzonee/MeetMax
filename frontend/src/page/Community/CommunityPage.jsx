import { Outlet } from "react-router-dom";
import Topbar from "./parts/Topbar";
import RightBarFriend from "../Home/part/RightBarFriend";
const CommunityPage = () => {
  return (
    <div className="flex">
      <div className="min-h-screen w-full bg-darkColors2 md:p-[25px] p-0 rounded-[20px]">
        <Topbar></Topbar>
        <Outlet></Outlet>
      </div>
      <span className="md:min-w-[250px]">
        <RightBarFriend></RightBarFriend>
      </span>
    </div>
  );
};

export default CommunityPage;
