import Modal from "react-modal";
import { CloseIcon } from "../components/icons";
import Button from "../components/button/Button";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { convertBase64 } from "../utils/uploadImage";
import axios from "axios";
import { endpoint } from "../utils/endpoint";
import { LOCAL_STORAGE_TOKEN } from "../utils/LocalStoreName";
import { useState } from "react";
const customStyles = {
  content: {
    width: "540px",
    backgroundColor: "#191C21",
    borderRadius: "16px",
    padding: "18px 20px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Upload = ({
  modalIsOpen,
  setModalIsOpen,
  setImage,
  image,
  fileImage,
  setFlag,
}) => {
  const [loading, setLoading] = useState(false);
  console.log("🚀 ~ loading:", loading);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!image || !fileImage) {
      toast.error("Please select your image");
      return;
    }
    const base64 = await convertBase64(fileImage);
    console.log("🚀 ~ onSubmit ~ base64:", base64);
    try {
      setLoading(true);
      const response = await axios.post(
        `${endpoint}/update-avatar`,
        {
          avatar: base64,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_TOKEN
            )}`,
          },
        }
      );
      setFlag(true);
      setLoading(false);
      setModalIsOpen(false);
      setImage(undefined);
      console.log("🚀 ~ onSubmit ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      return;
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={() => {
        setModalIsOpen(false);
        setImage(undefined);
      }}
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-white text-displayBold">
            Update image
          </h1>
          <button onClick={() => setModalIsOpen(false)}>
            <CloseIcon></CloseIcon>
          </button>
        </div>

        <img
          src={image}
          className="w-full h-[470px] rounded-[16px] flex-shrink-0 object-cover"
        ></img>

        <div className="flex items-center gap-[20px] justify-end">
          <span
            className="text-white cursor-pointer"
            onClick={() => {
              setModalIsOpen(false);
              setImage(undefined);
            }}
          >
            Cancel
          </span>
          <Button
            className=" !px-[35px] !py-[9px] text-white text-bodyBold"
            type="submit"
            isSubmitting={loading}
            spinner
          >
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

Upload.propTypes = {
  modalIsOpen: PropTypes.bool,
  setModalIsOpen: PropTypes.func,
  setImage: PropTypes.func,
  image: PropTypes.string,
  fileImage: PropTypes.any,
  setFlag: PropTypes.func,
};
export default Upload;
