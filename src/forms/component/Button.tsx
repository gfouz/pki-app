import React from 'react';
import styled from 'styled-components';
import { PropsButton } from '../type';

function Button(props: PropsButton) {
    return (
        <Container>
            <button type={props.type}>{props.name}</button>
        </Container>
    )
}

const Container = styled.div`
    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 15px;
        font-size: 18px;
        letter-spacing: 1px;
        box-shadow: 2px 2px 8px gray;
        color: white;
        background: linear-gradient(0deg, #204060, #0099cc, #0099cc);
        cursor: pointer;
        transition: 0.5s all ease;
        &:hover {
            transform: scale(1.1);
            box-shadow: 1px 1px 8px gray;
        }
    }
`;

export default Button
