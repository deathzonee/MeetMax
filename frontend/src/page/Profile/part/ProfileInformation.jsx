import MyInfo from "../../../utils/MyInfo";

import CoverPhoto from "./CoverPhoto";
import Info from "./Info";
import Photo from "./Photo";

const ProfileInformation = () => {
  const { name, avatar, coverphoto } = MyInfo();
  return (
    <div className="md:pr-[18px] bg-darkColors1">
      <section className="relative">
        <CoverPhoto src={coverphoto}></CoverPhoto>
        <Photo
          className="absolute bottom-0 left-0 translate-x-[30px] translate-y-[30px]"
          src={avatar}
        ></Photo>
      </section>
      <Info name={name}></Info>
    </div>
  );
};

export default ProfileInformation;
