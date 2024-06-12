import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderLayoutAuth from "./part/HeaderLayoutAuth";

const LayoutCommon = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, rgb(22, 28, 39) 0%, rgb(22, 28, 39) 100%);
  color: white;
  padding-bottom: 62px;
`;

const LoginSignUpLayout = () => {
  return (
    <LayoutCommon>
      <HeaderLayoutAuth></HeaderLayoutAuth>
      <Outlet></Outlet>
    </LayoutCommon>
  );
};

export default LoginSignUpLayout;
