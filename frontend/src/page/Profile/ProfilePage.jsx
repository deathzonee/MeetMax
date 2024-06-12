import UserInformation from "./UserInformation";
import ProfileInformation from "./part/ProfileInformation";

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <ProfileInformation></ProfileInformation>
      <UserInformation></UserInformation>
    </div>
  );
};

export default ProfilePage;
