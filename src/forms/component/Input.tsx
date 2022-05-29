import React from "react";
import styled from "styled-components";
import { InputProps } from "../type";

function Input({
  title,
  label,
  type,
  value,
  name,
  required,
  register,
  placeholder,
}: InputProps) {
  return (
    <Container>
      <p>{label}</p>
      <input
        title={title}
        className={type}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(label, { required })}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  p {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  input {
    width: 95%;
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
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    width: 2% !important;
  }
`;

export default Input;
