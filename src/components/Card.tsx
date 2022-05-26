import * as React from "react";
import styled from "styled-components";
import Row from "../graphics/Row";
import Headline from "../components/Headline";
import SpyGlass from "../icons/SpyGlass";

const Card = () => {
  return (
    <StyledCard>
      <div className="card">
        <Row >
          <Headline color="#ffffff"  text="Seguridad" />
          <SpyGlass size="2em" color="#ffffff" />
          <Headline color="#ffffff" text="Loading..." />
       </Row>
      </div>
    </StyledCard>
  );
};
export default Card;
const StyledCard = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  .card {
    padding: 1em;
    text-align: center;
    background-color: #333333;
    border-radius: 8px;

  }
`;
