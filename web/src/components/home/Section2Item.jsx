import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import styled from "styled-components";

const Section2Item = (props) => {
  return (
    <Container>
      <Icon className="icon">
        <IoCheckmarkDoneCircleSharp />
      </Icon>

      <Text>
        <h3>{props.case.title}</h3>
      </Text>
      <Icon className="icon">
        <FiMoreHorizontal />
      </Icon>
    </Container>
  );
};

export default Section2Item;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  .icon {
    font-size: 30px;
    * {
      cursor: pointer;
    }
  }
`;
const Text = styled.div``;
const Icon = styled.div``;
