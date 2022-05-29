import React from 'react'
import styled from 'styled-components'
import { PropsInput } from '../type';

function ButtonRadio(props: PropsInput) {
    return (
      <Container>
        <div className="input-label">
          {props.checked ? (
            <input
              checked = "true"
              className={props.type}
              value={props.value}
              type="radio"
              name={props.name}
              placeholder={props.placeholder}
            />
          ) : (
            <input
              onClick={() => {
                props.setStateRadio(props.value);
              }}
              className={props.type}
              value={props.value}
              type="radio"
              name={props.name}
              placeholder={props.placeholder}
            />
          )}

          <p className={props.label ? "label" : ""}>{props.label}</p>
        </div>
      </Container>
    );
}

const Container = styled.div`
  width: 100%;
  padding: 1em 0;
  .input-label {
    display: flex;
    justify-content: center;
    align-items: center;
    .label {
      font-size: 17px;
      width: 60%;
    }
  }
  p {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  input {
    width: 10%;
    cursor: pointer;
    height: 20px;
    border-radius: 5px;
    padding: 5px;
    font-size: 17px;
    letter-spacing: 1px;
    border: 0.2rem solid white;
    transition: 0.5s all ease;
    &:focus {
      border: 0.2rem solid #33ccff;
      outline: none;
    }
  }
`;

export default ButtonRadio
