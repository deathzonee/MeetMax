import { useEffect } from "react";
import FormAddNew from "./part/FormAddNew";

const ExploreAddPage = () => {
  useEffect(() => {
    document.title = "Add New Explore";
    return () => {
      document.title = "Vite + React";
    };
  });
  return (
    <div className="bg-darkColors2 px-[30px] pt-9 pb-[30px] rounded-[10px]">
      <FormAddNew></FormAddNew>
    </div>
  );
};

export default ExploreAddPage;
