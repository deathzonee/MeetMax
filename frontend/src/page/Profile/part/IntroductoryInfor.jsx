import {
  BirthdayIcon,
  ExploreIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwiterIcon,
  UserIcon,
} from "../../../components/icons";
import styled from "styled-components";
const information = [
  {
    id: 1,
    icon: <ExploreIcon></ExploreIcon>,
    content: "uihut.com",
  },
  {
    id: 2,
    icon: <UserIcon></UserIcon>,
    content: "Male",
  },
  {
    id: 3,
    icon: <BirthdayIcon></BirthdayIcon>,
    content: "Born June 18,2001",
  },
  {
    id: 4,
    icon: <LocationIcon></LocationIcon>,
    content: "Sylhet, Bangladesh",
  },
  {
    id: 5,
    icon: <FacebookIcon></FacebookIcon>,
    content: "Facebook salehahmed",
  },
  {
    id: 6,
    icon: <TwiterIcon></TwiterIcon>,
    content: "Twitter salehahmed",
  },
  {
    id: 7,
    icon: <InstagramIcon></InstagramIcon>,
    content: "Instagram Saleh_ahmed",
  },
  {
    id: 8,
    content: "52,844 Followers",
  },
  {
    id: 9,
    content: "2,564 Following",
  },
];
const IntroductoryInforStyled = styled.div`
  width: 250px;
  height: 414px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  background-color: #191c21;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  flex-shrink: 0;
  padding: 18px;
  position: sticky;
  top: 60px;
  @media (max-width: 46.1875em) {
    position: static;
    width: 100%;
    border-radius: 0;
    margin-top: 10px;
  }
`;
const IntroductoryInfor = () => {
  return (
    <IntroductoryInforStyled>
      <h1 className="font-bold text-displayMedium">INTRO</h1>
      <ul className="flex flex-col gap-[10px]">
        {information.length > 0 &&
          information.map((item) => (
            <li key={item.id} className="flex items-center gap-[20px]">
              {item.icon}
              <span>{item.content}</span>
            </li>
          ))}
      </ul>
      <button className="w-full py-[10px] bg-darkColors2 rounded-[10px]">
        Edit Details
      </button>
    </IntroductoryInforStyled>
  );
};

export default IntroductoryInfor;
