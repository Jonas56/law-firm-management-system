import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CaseBox() {
  return (
    <Container>
      <Link to="/add-case">+</Link>
    </Container>
  );
}

export default CaseBox;

const Container = styled.div`
  width: 400px;
  height: 300px;
  background-color: #393e46;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  a {
    font-size: 135px;
    cursor: pointer;
    :hover {
      color: yellow;
    }
  }
`;
