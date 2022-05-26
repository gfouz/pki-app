import * as React from 'react';
import styled from 'styled-components';
import Nav from "../../components/Nav";
import Row from "../../graphics/Row";
import Column from "../../graphics/Column";

function Services() {
	return(
    <>
     <StyledService>		
       <Nav  padding="2em" /> 
       <Column  spread center>
       <Row evenly wrap>
        <h1>Services</h1>
        <h1>Services</h1>
        <h1>Services</h1>
       </Row> 
      </Column>
     </StyledService> 
    </>  
    );
}

export default Services;

const StyledService = styled.div`
width: 100%;
height: 100vh;
min-height: 100vh;
background-color: brown;
h1{
  padding: 0 0.2em;
}
.container {
  background-color: lightblue;
  height: 600px;
}
`;