import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsFillBriefcaseFill, BsFillCalendarDateFill } from "react-icons/bs";
import { FaTasks, FaFileInvoiceDollar } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

function Sidebar(props) {
  return (
    <Wrapper active={props.active}>
      <Container>
        {/* <Logo>
          <h1>
            LawFirm<span style={{ color: "yellow" }}>.</span>
          </h1>
        </Logo> */}
        <Menu1>
          <NavLink to="/" exact onClick={props.onClick}>
            <AiFillHome />
            Dashboard
          </NavLink>
          <NavLink to="/cases" onClick={props.onClick}>
            <BsFillBriefcaseFill /> Cases
          </NavLink>
          <NavLink to="/calendar" onClick={props.onClick}>
            <BsFillCalendarDateFill />
            Calendar
          </NavLink>
          <NavLink to="/tasks" onClick={props.onClick}>
            <FaTasks />
            Tasks
          </NavLink>
        </Menu1>
        <Menu2>
          <NavLink to="/documents" onClick={props.onClick}>
            <IoDocumentText />
            Documents
          </NavLink>
          <NavLink to="/invoices" onClick={props.onClick}>
            <FaFileInvoiceDollar />
            Invoices
          </NavLink>
        </Menu2>
      </Container>
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.div`
  position: fixed;
  width: 18%;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  transition: transform 0.5s ease;
  z-index: 100;
  transform: ${(props) =>
    props.active ? "translateX(0%)" : "translateX(-100%)"};

  @media screen and (max-width: 900px) {
    width: 100%;
    opacity: 0.95;
  }
`;
const Container = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: start;
  z-index: 100;
`;

const Logo = styled.div`
  cursor: pointer;
`;
const Menu1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: fstretch;
  gap: 1rem;
  text-align: start;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.7rem;
    padding: 5px 20px;
    transition: all 0.7s ease;
    border-radius: 30px;
    :hover {
      border: 1px solid white;
      transform: scale(1.1);
    }
  }
`;
const Menu2 = styled(Menu1)``;
