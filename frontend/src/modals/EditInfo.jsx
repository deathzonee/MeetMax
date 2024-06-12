import styled from "styled-components";
import Information from "../page/Profile/information";
import propTypes from "prop-types";
import { CloseIcon } from "../components/icons";

const EditInfoContainerStyled = styled.div`
  position: relative;
  max-height: 600px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    flex: 1;
    width: calc(100%+20px);
    background-color: #47556d;
    box-sizing: border-box;
    top: 63px;
    left: -20px;
    right: -20px;
    transform: translateY(-20px);
  }
`;
const EditInfo = ({ setShow }) => {
  return (
    <EditInfoContainerStyled>
      <div className="flex items-center justify-between">
        <h2>Edit basic info</h2>
        <div className="cursor-pointer" onClick={() => setShow(false)}>
          <CloseIcon></CloseIcon>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-[160px] object-cover rounded-t-[10px] mt-[40px]"
        ></img>

        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-[80px] h-[80px] rounded-[80px] absolute left-[30px] top-2/4 translate-y-2/4 border border-slate-300"
        />
      </div>

      <Information setShow={setShow}></Information>
    </EditInfoContainerStyled>
  );
};

export default EditInfo;

EditInfo.propTypes = {
  setShow: propTypes.func,
};
