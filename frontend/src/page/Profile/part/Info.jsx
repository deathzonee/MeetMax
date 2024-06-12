import PropTypes from "prop-types";
import Button from "../../../components/button/Button";
import EditInfo from "../../../modals/EditInfo";
import { useState } from "react";
import Modal from "react-modal";
import { OpenEyeIcon } from "../../../components/icons";
const editStyle = {
  overlay: {
    zIndex: "10000",
    backgroundColor: "rgba(33, 40, 48, 0.8)",
  },

  content: {
    width: "712px",
    backgroundColor: "#191c21",
    color: "#fff",
    border: "none",
    borderRadius: "16px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Info = ({ name = "", desc = "UI Designer" }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mt-10 mx-[30px] flex justify-between">
        <span className="flex flex-col">
          <h2 className="font-bold text-white text-heading2Bold text-opacity-90">
            {name}
          </h2>
          <h4 className="font-medium text-white text-displayMedium text-opacity-40">
            {desc}
          </h4>
        </span>
        <span className="inline-flex items-center gap-5 text-white">
          <OpenEyeIcon></OpenEyeIcon>
          <Button
            className="md:px-5 md:py-[9px] md:text-bodyBold bg-darkColors2 inline-block md:h-10"
            onClick={() => setShow(true)}
          >
            Edit basic info
          </Button>
        </span>
      </div>

      <Modal
        style={editStyle}
        isOpen={show}
        onRequestClose={() => setShow(false)}
        shouldCloseOnOverlayClick={true}
      >
        <EditInfo setShow={setShow}></EditInfo>
      </Modal>
    </>
  );
};

export default Info;

Info.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
};
