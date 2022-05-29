import React from 'react';
import styled from 'styled-components';
import {PropsForm} from '../type';

function Form (props: PropsForm)  {
    return (
        <Container >
            <FormContent className={props.colorForm}>
            <h1>{props.title}</h1>
            {props.children}
            </FormContent>
        </Container>
    );
}

const Container = styled.div`
margin: 4.5rem 0 4.5rem 0;
justify-content: center;
align-items: center;
  .red-form {
    background: linear-gradient(0deg, #660000, #eb7575, #eb7575) !important;
  }
`;

const FormContent = styled.div`
  padding: 1rem 0.5rem;
  border-radius: 15px;
  box-shadow: 2px 5px 7px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: white;
    font-family: "Times New Roman", Times, serif;
    background: #ff9999;
    padding: 0.5rem 1rem;
    border-radius: 15px;
  }
`;

export default Form
