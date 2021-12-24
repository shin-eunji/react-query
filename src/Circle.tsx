import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle ({ bgColor, borderColor, text = "default text" }: CircleProps) {

  return <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>{text}</Container>;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${props => props.borderColor};
`
export default Circle;


interface playerShape {
  name: string;
  age: number;
}
const sayHello = (playerObj: playerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`

sayHello({name: "shin", age: 28});
sayHello({name: "hi", age: 12});
