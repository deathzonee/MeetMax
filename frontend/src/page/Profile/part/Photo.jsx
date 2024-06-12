import UploadIcon from "../../../components/icons/UploadIcon";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import Upload from "../../../modals/Upload";
import { useEffect } from "react";
import { getCurrentUser } from "../../../redux/auth/apiRequest";
import { LOCAL_STORAGE_TOKEN } from "../../../utils/LocalStoreName";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const PhotoStyled = styled.div`
  div {
    display: inline-block;
    position: relative;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 100rem;
    border: 4px solid #4e5d78;
  }
  .upload {
    position: absolute;
    display: inline-block;
    padding: 7px;
    background-color: #4e5d78;
    border-radius: 100rem;
    bottom: 0;
    right: 0;
    transform: translate(-11px, -4px);
    cursor: pointer;
  }
`;

const Photo = ({ className, src }) => {
  const [image, setImage] = useState();
  const [fileImage, setFileImage] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const samePhoto = async (e) => {
    setFileImage(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);

    fileReader.onload = () => {
      setImage(fileReader.result);
      setModalIsOpen(true);
    };

    fileReader.onerror = (error) => {
      console.log("error :", error);
    };
  };

  useEffect(() => {
    getCurrentUser(LOCAL_STORAGE_TOKEN, dispatch, toast);
  }, [flag]);
  return (
    <PhotoStyled className={className}>
      <div>
        <img src={src} alt="avatar" className="flex-shrink-0 object-cover" />
        <label htmlFor="upload-avatar" className="upload ">
          <UploadIcon></UploadIcon>
          <input
            type="file"
            id="upload-avatar"
            className="hidden"
            onChange={samePhoto}
          />
        </label>
        {image && modalIsOpen && (
          <Upload
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            setImage={setImage}
            image={image}
            fileImage={fileImage}
            setFlag={setFlag}
          ></Upload>
        )}
      </div>
    </PhotoStyled>
  );
};

export default Photo;

Photo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  classNameImg: PropTypes.string,
};
