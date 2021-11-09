import React, { useState } from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { MdOutlineNotifications } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
  const closeSidebar = () => setActive(false);
  return (
    <Container>
      <Sidebar active={active} onClick={closeSidebar} />

      <LogoContainer>
        <GiHamburgerMenu onClick={() => setActive(!active)} />
        <Logo>
          <Link to="/">
            <h1>
              LawFirm<span style={{ color: "yellow" }}>.</span>
            </h1>
          </Link>
        </Logo>
      </LogoContainer>
      <Search>
        <SearchBox>
          <input type="text" placeholder="search here ..." />
        </SearchBox>
        <Filter>
          <select name="filter-search" id="">
            <option value="Filter">Filter</option>
            <option value="Cases">Cases</option>
            <option value="Tasks">Tasks</option>
          </select>
        </Filter>
      </Search>

      <Profile>
        <Icon>
          <FiSettings />
        </Icon>
        <Icon>
          <MdOutlineNotifications />
        </Icon>
        <Avatar src="./images/avatar.jpg"></Avatar>
      </Profile>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 9%;
  width: 100%;
  padding: 1rem 2rem;
  gap: 2rem;
  z-index: 200;
  * {
    z-index: 200;
  }
  @media screen and (max-width: 900px) {
    gap: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 19px;
  * {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  * {
    padding-bottom: 0.2rem;
    transition: all 1s ease;
    :hover {
      border-bottom: 1px solid white;
    }
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
  /* border: red solid 1px; */
`;
const SearchBox = styled.div`
  width: 100%;
  flex: 2;
  * {
    width: 90%;
    height: 45px;
    outline: none;
    border: none;
    background-color: #393e46;
    padding: 1.5rem 2rem;
    border-radius: 16px;
  }
`;
const Filter = styled.div`
  width: 100%;
  flex: 0.5;
  * {
    width: 95%;
    height: 45px;
    background-color: #393e46;
    outline: none;
    border: none;
    padding: 0.5rem;
    border-radius: 10px;
    text-align: center;
    * {
      text-align: center;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* border: white 1px solid; */
  font-size: 25px;
  * {
    cursor: pointer;
  }
`;
const Icon = styled.div``;
const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector("header").style.backgroundColor = "black";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
  }
}
