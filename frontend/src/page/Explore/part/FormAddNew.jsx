import { useForm } from "react-hook-form";
import PathLevel2 from "./PathLevel2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Radio from "../../../components/radio/Radio";
import { CategoryList } from "./categoryList";
import styled from "styled-components";
import Input from "../../../components/input/Input";
import UploadIcon from "../../../components/icons/UploadIcon";
import Button from "../../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import Textarea from "../../../components/textarea/Textarea";
import { useState } from "react";
import { convertBase64, samePhoto } from "../../../utils/uploadImage";
import axios from "axios";
import { endpoint } from "../../../utils/endpoint";
import { LOCAL_STORAGE_TOKEN } from "../../../utils/LocalStoreName";
import { toast } from "react-toastify";

const FormStyled = styled.form`
  .category {
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    width: 220px;
    ::after {
      content: "";
      position: absolute;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: #4e5d78;
    }
  }
  .upload {
    display: block;
    height: 242px;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    &__icon {
      padding: 7px;
      border-radius: 100rem;
      background-color: #4e5d78;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .group-btn {
    display: flex;
    justify-content: end;
    margin-bottom: 40px;
    button {
      width: 100px;
      height: 40px;
    }
  }
`;

const schema = yup.object().shape({
  title: yup.string().required("Please enter your title"),
});

const FormAddNew = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      category: "Event",
    },
  });

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    if (!fileImg) {
      toast.error("Please select your image");
      return;
    }
    const base64 = await convertBase64(fileImg);
    console.log("base64 :", base64);
    const req = { ...data, description, images: base64 };
    try {
      await axios.post(`${endpoint}/create-explore`, req, {
        headers: {
          authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`,
        },
      });
      toast.success("Upload successfully");
      navigate("/explore");
    } catch (error) {
      console.log("error :", error);
      toast.error("Failed");
      navigate("/explore");
    }
  };

  const watchCategory = watch("category");

  const [description, setDescription] = useState();
  const [fileImg, setFileImg] = useState();
  const [img, setImg] = useState();

  return (
    <div className="bg-darkColors1 p-[30px] pb-0 rounded-lg flex flex-col gap-[30px]">
      <PathLevel2></PathLevel2>
      <FormStyled className="flex" onSubmit={handleSubmit(submitHandler)}>
        <div className="category">
          <h2 className="text-white">Select a Category</h2>
          <div className="text-white text-opacity-60 flex flex-col gap-4 category--list">
            {CategoryList.map((item) => (
              <Radio
                control={control}
                name="category"
                value={item.value}
                checked={watchCategory === `${item.value}`}
                className={
                  watchCategory === `${item.value}` ? "text-white" : ""
                }
                key={item.id}
              >
                {item.value}
              </Radio>
            ))}
          </div>
        </div>
        <div className="flex-1 pl-[30px] flex flex-col gap-5">
          <Input
            name="title"
            placeholder="Right a Title here"
            id="tile"
            type="text"
            error={errors?.title?.message}
            control={control}
            className="md:py-[10px] md:pl-5 placeholder:text-bodyBold placeholder:font-normal text-white"
          ></Input>
          <label
            htmlFor="upload-explore"
            className="upload bg-darkColors2 overflow-hidden"
          >
            {img ? (
              <img
                src={img}
                className="w-full object-fill"
                style={{ height: "inherit" }}
              ></img>
            ) : (
              <>
                <input
                  type="file"
                  id="upload-explore"
                  className="hidden"
                  onChange={(e) => samePhoto(e, setFileImg, setImg)}
                />
                <span className="upload__icon">
                  <UploadIcon></UploadIcon>
                </span>
              </>
            )}
          </label>
          <Textarea
            placeholder="Description here"
            className="pl-5 pt-5 !h-[260px] placeholder:text-bodyBold placeholder:font-normal font-normal text-white text-bodyBold"
            setValue={setDescription}
          ></Textarea>
          <span className="group-btn">
            <Link
              to={"/explore"}
              className="text-white md:py-[9px] !px-7 !text-bodyBold font-medium bg-transparent text-opacity-60"
            >
              Cancel
            </Link>
            <Button
              type="submit"
              isSubmitting={isSubmitting}
              spinner
              className="text-white md:py-[9px] !px-7 !text-bodyBold font-medium flex justify-center items-center"
            >
              Submit
            </Button>
          </span>
        </div>
      </FormStyled>
    </div>
  );
};

export default FormAddNew;
