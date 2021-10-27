import React from "react";
import styled from "styled-components";
import CaseBox from "../components/cases-page/CaseBox";
import { cases } from "../data/cases";

function Cases() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cases</h1>
      <Container>
        {cases.map((item, id) => (
          <CaseBox case={item} key={id} />
        ))}
        {cases.map((item, id) => (
          <CaseBox case={item} key={id} />
        ))}
      </Container>
    </div>
  );
}

export default Cases;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  margin: 2rem;
  * {
    z-index: -1;
  }
`;
