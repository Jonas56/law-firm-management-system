import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <>
      {" "}
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Home</h1>
      <Container>
        <Section1>
          <Box>
            <h2>Active Cases</h2>
            <h2>13</h2>
          </Box>
          <BoxLarge>
            <h2>Total Income</h2>
            <h2 className="item-end">12.430 MAD</h2>
          </BoxLarge>
          <BoxLarge>
            <h2>Next Court</h2>
            <h2 className="item-end">September, 13</h2>
          </BoxLarge>
        </Section1>
        <Section2>
          <Cases></Cases>
          <Tasks></Tasks>
        </Section2>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  h1 {
    margin: 2rem auto;
  }
  * {
    z-index: -1;
  }
`;
const Section1 = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 120px;
  width: 204px;
  padding: 1rem;
  background-color: #393e46;
  border-radius: 10px;
`;
const BoxLarge = styled(Box)`
  width: 334px;
  justify-content: space-between;
  align-items: flex-start;

  .item-end {
    align-self: flex-end;
  }
`;

/* Section 2 */

const Section2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Cases = styled.div`
  width: 43%;
  height: 350px;
  background-color: #393e46;
  border-radius: 10px;
`;
const Tasks = styled(Cases)``;
