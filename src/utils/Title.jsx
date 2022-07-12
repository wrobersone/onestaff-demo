import React from 'react'
import styled from 'styled-components';

const TitleStyle = styled.div`
    h3 {
        color: var(--color-white);
        font-size: 2.2rem;
    }
    p{
        padding: 1rem 0
    }
`;

function Title({ name, para }) {
  return (
    <TitleStyle>
        <h3>{name}</h3>
        <p>{para}</p>
    </TitleStyle>
  )
}

export default Title

