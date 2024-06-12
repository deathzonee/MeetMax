import PlusIcon from "../../../components/icons/PlusIcon";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link
      to={"add-new"}
      className="text-white p-[13px] bg-grayColor rounded-full inline-block fixed z-10 bottom-3 right-3 -translate-x-full -translate-y-full"
    >
      <PlusIcon></PlusIcon>
    </Link>
  );
};

export default AddButton;
