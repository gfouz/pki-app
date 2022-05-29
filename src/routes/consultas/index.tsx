import * as React from 'react';
import Nav from "../../components/Nav";
import Box from "../../components/Box";
import Column from "../../graphics/Column";
import Request from '../../forms/Request'



const navbar:object = {
  color: "#444444"
};

function Consultas() {

	return(
	<>	
    <Nav {...navbar} />	
    <Box column height="100vh">
     <Column  spread center>
       <Request />
     </Column>  
    </Box>
  </> 
		);
}

export default Consultas;
