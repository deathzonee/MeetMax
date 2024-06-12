import { useSelector } from "react-redux";

const MyInfo = () => {
  const name = useSelector(
    (state) => state?.auth?.auth?.user?.message?.username
  );
  const avatar = useSelector(
    (state) => state?.auth?.auth?.user?.message?.avatar
  );

  const coverphoto = useSelector(
    (state) => state?.auth?.auth?.user?.message?.coverphoto
  );
  const id = useSelector((state) => state?.auth?.auth?.user?.message?._id);
  const user = useSelector((state) => state?.auth?.auth?.user?.message);
  const profileInfo = {
    name: name,
    avatar: avatar,
    coverphoto: coverphoto,
    id: id,
    user: user,
  };
  return profileInfo;
};

export default MyInfo;
