import * as React from 'react';
import styled from 'styled-components';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import RequestModel from '../../forms/Request';

function Services() {
	return(
    <>
     <StyledService>		
       <div className="request">
          <Nav  padding="1em" color="#ffffff" bg="#555555"/> 
          <RequestModel />
          <Footer simple bg="#444444" p="1em" c="#ffffff"> 
            <h3>
               Seguridad informática {new Date().getFullYear()}
            </h3>
          </Footer>
       </div>
     </StyledService> 
    </>  
    );
}

export default Services;

const StyledService = styled.div`
width: 100%;
min-height: 100vh;
h1{
  padding: 0 0.2em;
}
.request {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
}
`;