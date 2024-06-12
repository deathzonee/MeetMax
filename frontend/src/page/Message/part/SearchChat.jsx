import { SearchIcon } from "../../../components/icons";
import InputSecondary from "../../../components/input/InputSecondary";

const SearchChat = () => {
  return (
    <>
      <InputSecondary
        name="searchchat"
        placeholder="Search"
        className="h-[42px] pl-[45px]"
      >
        <SearchIcon />
      </InputSecondary>
    </>
  );
};

export default SearchChat;
