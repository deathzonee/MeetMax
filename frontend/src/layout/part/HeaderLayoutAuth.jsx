import styled from "styled-components";
import { Link } from "react-router-dom";
const HeaderLayoutAuthLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 78px;
  margin-bottom: 30px;
  & .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const HeaderLayoutAuth = () => {
  return (
    <HeaderLayoutAuthLayout>
      <Link className="logo" to={"/"}>
        <img src="./Logo.png" alt="" />
        <h2 className="brand">Meetmax</h2>
      </Link>
      <div className="select-language"></div>
    </HeaderLayoutAuthLayout>
  );
};

export default HeaderLayoutAuth;
