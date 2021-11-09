import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CaseBox from "../components/cases-page/CaseBox";
import AddCaseBox from "../components/cases-page/AddCaseBox";
import { cases } from "../data/cases";

function Cases(props) {
  console.log(props);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cases</h1>
      <Container>
        <AddCaseBox />
        {props.cases.map((item, id) => (
          <CaseBox case={item} key={id} />
        ))}
        {cases.map((item, id) => (
          <CaseBox case={item} key={id} />
        ))}
      </Container>
      {console.log(mapStateToProps)}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { cases } = state;
  return { cases };
};

export default connect(mapStateToProps)(Cases);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  margin: 2rem;
  * {
    z-index: 1;
  }
`;
