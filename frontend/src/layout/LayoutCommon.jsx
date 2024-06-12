import { Outlet } from "react-router-dom";
import Header from "./part/Header";
import SideBar from "./part/SideBar";
const LayoutCommon = () => {
  return (
    <div className="flex">
      <span className="md:min-w-[240px] ">
        <SideBar></SideBar>
      </span>
      <main className="w-full md:pt-[78px] md:pb-0 pt-[62px] pb-[56px] bg-darkColors1">
        <Header></Header>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LayoutCommon;
