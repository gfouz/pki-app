import * as React from 'react';
import Nav from "../../components/Nav";
import Box from "../../components/Box";


const navbar:object = {
  color: "#444444"
};

function Consultas() {

	return(
	<>	
    <Nav {...navbar} />	
    <Box column height="100vh">
      <h1 style={{color:"#82fa02"}}>
         Consultas
      </h1>
    </Box>
  </> 
		);
}

export default Consultas;
