import React from 'react';
import styled from 'styled-components';

function Dark () {

  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  )
}

const Title = styled.h1`
  color: ${props => props.theme.textColor}
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.backgroundColor};
`


export default Dark;
