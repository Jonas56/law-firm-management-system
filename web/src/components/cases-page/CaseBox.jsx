import React from "react";
import styled from "styled-components";

function CaseBox(props) {
  return (
    <Container>
      <div>
        <Id>{props.case.id}</Id>
        <Title>{props.case.title}</Title>
      </div>

      <Description>{props.case.description}</Description>
      <Info>
        <p>{props.case.court}</p>
        <p>Date</p>
      </Info>
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
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
  /* @media screen and (max-width: 1000px) {
    width: 50%;
  }
  @media screen and (max-width: 850px) {
    width: 60%;
  }
  @media screen and (max-width: 650px) {
    width: 75%;
  } */
`;
const Id = styled.h3``;
const Title = styled(Id)``;
const Description = styled.p``;
const Info = styled.div``;
