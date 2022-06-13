import React from 'react'
import styled from 'styled-components'

function Button({ text }) {
  return (
    <Btn>{text}</Btn>
  )
}

export default Button

const Btn = styled.button`
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 2px solid #fcf9ed;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    color: white;
    &:hover {
      background-color: var(--primary-color);
    }
`;