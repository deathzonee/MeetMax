import { useEffect } from "react";
import HeaderAuth from "./part/HeaderAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import { endpoint } from "../../utils/endpoint";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CheckMailPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`${endpoint}/verify?token=${token}`);
        if (res.data.success) {
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    };
    verifyEmail();
  }, []);

  return (
    <div className="md:max-w-[580px] md:mx-auto  md:p-10 md:rounded-[20px] bg-darkColors2 w-auto mx-6 pt-6 pb-6 rounded-[6px]">
      <HeaderAuth
        title="Verify email"
        desc={<span>Please wait for the email verification process...</span>}
      ></HeaderAuth>

      <div className="w-full flex justify-center ">
        <span className="h-10 w-10 border-2 border-white border-t-transparent animate-spin rounded-full"></span>
      </div>
    </div>
  );
};

export default CheckMailPage;
