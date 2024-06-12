import { useEffect } from "react";
import ListCard from "./part/ListCard";
import AddButton from "./part/AddButton";

const ExplorePage = () => {
  useEffect(() => {
    document.title = "Explore";
    return () => {
      document.title = "Vite + React";
    };
  });

  return (
    <div className="bg-darkColors2 min-h-screen rounded-[10px] md:p-[30px] p-5 relative font-semibold">
      <AddButton></AddButton>
      <ListCard></ListCard>
    </div>
  );
};

export default ExplorePage;
