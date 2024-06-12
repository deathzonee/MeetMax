import styled from "styled-components";
import PropTypes from "prop-types";
import { UploadIcon } from "../../../components/icons";
import { useState } from "react";
import { useEffect } from "react";
import { getCurrentUser } from "../../../redux/auth/apiRequest";
import { LOCAL_STORAGE_TOKEN } from "../../../utils/LocalStoreName";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import UploadCoverImage from "../../../modals/UploadCoverImage";

const CoverPhotoStyled = styled.div`
  position: relative;
  img {
    border-radius: 10px 10px 4px 4px;
    height: 350px;
    width: 100%;
    object-fit: cover;
  }
  .edit {
    position: absolute;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border-radius: 10px;
    padding: 9px 10px;
    gap: 14px;
    right: 0;
    bottom: 0;
    transform: translate(-30px, -30px);
  }
`;

const CoverPhoto = ({ src = "https://source.unsplash.com/random" }) => {
  const [coverImage, setCoverImage] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fileCoverImage, setFileCoverImage] = useState();
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const samePhoto = async (e) => {
    setFileCoverImage(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);

    fileReader.onload = () => {
      setCoverImage(fileReader.result);
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
    <CoverPhotoStyled className="text-white text-opacity-90">
      <img src={src} alt="cover-photo" />
      <label htmlFor="cover-photo" className="edit bg-darkColors2">
        <input
          type="file"
          id="cover-photo"
          className="hidden"
          onChange={samePhoto}
        />
        <UploadIcon></UploadIcon>
        <p className="text-bodyBold">Edit Cover Photo</p>
      </label>

      {coverImage && modalIsOpen && (
        <UploadCoverImage
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          image={coverImage}
          setImage={setCoverImage}
          fileImage={fileCoverImage}
          setFlag={setFlag}
        ></UploadCoverImage>
      )}
    </CoverPhotoStyled>
  );
};

export default CoverPhoto;

CoverPhoto.propTypes = {
  src: PropTypes.string,
};
