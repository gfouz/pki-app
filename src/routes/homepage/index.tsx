import * as React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav";
import Row from "../../graphics/Row";
import Column from "../../graphics/Column";


const Homepage = () => {
   
    
	return (
		<>
			
				<StyledHome>
				  <Nav color="#ffffff" padding="2em 0" />
          <Row vh center >
					  <h1>Asistencia para una comunicación segura
					    con proveedores y clientes
					  </h1>
					</Row>
				</StyledHome>

		</>
	);
};
export default Homepage;

const StyledHome = styled.div`
  text-align: center;
  color: #ffffff;
  min-height: 100vh;
  background-image: url('./images/homepage.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
  	font-family: calibri;
  	margin: 0 0 7em 0;
  }
`;
//You can also disable this overlay by setting server.hmr.overlay to false in vite.config.js.
