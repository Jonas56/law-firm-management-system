import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function NotFoundPage() {
  return (
    <Container>
      Page not found! <Link to="/">Go Home</Link>
    </Container>
  );
}

export default NotFoundPage;

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  a {
    text-decoration: underline;
    color: beige;
  }
`;
