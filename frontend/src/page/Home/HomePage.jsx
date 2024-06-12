import styled from "styled-components";
import CreatePost from "./part/CreatePost";
import propTypes from "prop-types";
import Posts from "./part/Posts";
const HomePageStyled = styled.div`
  @media (max-width: 46.1875em) {
    & .background-homepage {
      padding: 8px 0 56px 0;
      display: flex;
      flex-direction: column;
      border-radius: 0px;
      gap: 8px;
    }
  }
`;

const HomePage = () => {
  return (
    <HomePageStyled className="flex bg-darkColors1">
      <div className="background-homepage  w-full bg-darkColors2 h-full flex flex-col gap-[30px]  md:p-[25px] p-5 rounded-[20px] ">
        <CreatePost></CreatePost>
        <Posts></Posts>
      </div>
    </HomePageStyled>
  );
};
export default HomePage;

HomePage.propTypes = {
  postModal: propTypes.string,
  setPostModal: propTypes.string,
};
