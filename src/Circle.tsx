import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}
interface CircleProps {
  bgColor: string;
}

function Circle ({ bgColor }: CircleProps) {

  return <Container bgColor={bgColor} />;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 50%;
`
export default Circle;


interface playerShape {
  name: string;
  age: number;
}
const sayHello = (playerObj: playerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`

sayHello({name: "shin", age: 28});
sayHello({name: "hi", age: 12});
