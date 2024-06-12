import CreatePost from "../Home/part/CreatePost";
import Posts from "../Home/part/Posts";
import IntroductoryInfor from "./part/IntroductoryInfor";
import styled from "styled-components";
const UserInformationStyled = styled.div`
  display: flex;
  gap: 30px;
  background-color: #212833;
  padding: 30px;
  border-radius: 16px;
  @media (max-width: 46.1875em) {
    display: flex;
    flex-direction: column;
    padding: 0;
    border-radius: 0;
    gap: 10px;
    position: sticky;
  }
`;

const UserInformation = () => {
  return (
    <UserInformationStyled>
      <IntroductoryInfor></IntroductoryInfor>
      <div className="flex-1 flex flex-col md:gap-[30px] gap-[10px] text-white">
        <CreatePost></CreatePost>
        <Posts></Posts>
        <Posts></Posts>
        <Posts></Posts>
        <Posts></Posts>
      </div>
    </UserInformationStyled>
  );
};

export default UserInformation;
