import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";
const TopBarStyled = styled.div`
  padding: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: #191c21;
  border-radius: 16px;
  gap: 19px;
  text-align: center;
  margin-bottom: 18px;
  position: relative;
  ::after {
    content: "";
    width: 100%;
    position: absolute;
    height: 10px;
    background-color: #212833;
  }
  @media (max-width: 46.1875em) {
    border-radius: 0;
    text-align: center;
    font-size: 10px;
    line-height: 16px;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 10px;
  }
`;
const Topbar = () => {
  const topBars = [
    {
      id: 1,
      title: `Followers`,
      url: "/community/",
    },
    {
      id: 2,
      title: `Following`,
      url: "/community/following",
    },
    {
      id: 3,
      title: `People You Might Like`,
      url: "/community/everybody",
    },
  ];
  const [activeTab, setActiveTab] = useState(topBars[0].id);

  const topBarLinkClass =
    "2xl:px-[60px] 2xl:py-3  px-[5px] py-[5px] flex rounded-[10px] border border-darkColors2 text-white";
  return (
    <TopBarStyled>
      {topBars.map((topBar) => (
        <NavLink
          key={topBar.id}
          to={topBar.url}
          className={
            activeTab === topBar.id
              ? `${topBarLinkClass} bg-blueColors `
              : `${topBarLinkClass}`
          }
          onClick={() => setActiveTab(topBar.id)}
        >
          <span className="flex items-center justify-center w-full">
            {topBar.title}
          </span>
        </NavLink>
      ))}
    </TopBarStyled>
  );
};

Topbar.propTypes = {
  followerNumber: PropTypes.number,
  followingNumber: PropTypes.number,
};
export default Topbar;
