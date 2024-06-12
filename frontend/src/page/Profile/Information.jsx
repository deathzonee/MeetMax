import Button from "../../components/button/Button";
import InputSecondary from "../../components/input/InputSecondary";
import PropTypes from "prop-types";
import Textarea from "../../components/textarea/Textarea";

const Information = ({
  name = "Sale Ahmed",
  dateBirth = "18 june 2001",
  website = "www.uihut.com",
  location = "Sylhet, Bangladesh",
  bio = "UI designer...",
  email = "uihut@gmail.com",
  phoneNumber = "0123456789",
  setShow,
}) => {
  return (
    <div className="px-[40px] mt-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px] mb-[20px]">
        <Tag title="Name" name="name" placeholder={name}></Tag>
        <Tag title="Date of birth" name="date" placeholder={dateBirth}></Tag>
        <Tag title="Website" name="website" placeholder={website}></Tag>
        <Tag title="Location" name="location" placeholder={location}></Tag>
      </div>
      <div className="flex flex-col gap-[10px] mb-[20px]">
        <span>Bio</span>
        <Textarea
          name="bio"
          placeholder={bio}
          className="!h-[60px] px-[10px] pt-[10px] pb-[32px] !text-bodyRegular transition-all"
        ></Textarea>
      </div>
      <div className="flex md:flex-row flex-col gap-[20px] mb-[20px]">
        <Tag title="Email" name="email" placeholder={email}></Tag>
        <Tag title="Phone number" name="phone" placeholder={phoneNumber}></Tag>
      </div>
      <div className="flex items-center gap-[20px] justify-end">
        <span className="cursor-pointer" onClick={() => setShow(false)}>
          Cancel
        </span>
        <Button className="!w-[80px] !h-[40px] !px-[23px] !py-[9px] text-white text-bodyBold">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Information;

const Tag = ({ title, placeholder, name, className }) => {
  return (
    <div className="w-full flex flex-col gap-[10px]">
      <span className="text-displayBold">{title}</span>
      <InputSecondary
        name={name}
        placeholder={placeholder}
        className={
          className
            ? className
            : "rounded-[10px] border border-gray-500 !text-bodyRegular !p-[10px]"
        }
      ></InputSecondary>
    </div>
  );
};

Information.propTypes = {
  name: PropTypes.string,
  dateBirth: PropTypes.string,
  website: PropTypes.string,
  location: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  setShow: PropTypes.func,
};

Tag.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};
