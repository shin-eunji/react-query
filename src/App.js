import styled, { keyframes } from "styled-components";

function App () {

  return (
    <Container>
      <Box bgColor={"teal"}>
        <Text>Hello</Text>
      </Box>
      <Circle bgColor={"tomato"}>
        <Text>
          Hi
        </Text>
      </Circle>

      <Btn>Login</Btn>
      <Btn as="a" href="#">Login</Btn>

      <Input  />
      <Input  />
      <Input  />
      <Input  />
      <Input  />

      <BoxAnimation>
        <span>😁</span>
      </BoxAnimation>
      <BoxAnimationTwo />


    </Container>
  );
}

const Container = styled.div`
`
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Text = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
const Btn = styled.button`
  color: white;
  background: tomato;
  border: 0;
  border-radius: 15px;
`;
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background: tomato;
`;
const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0;
  }
  to {
    transform: rotate(360deg);
    border-radius: 100px;
  }
`;

const rotationAnimationTwo = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0;
  }
`;
const BoxAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: cornflowerblue;
  animation: ${rotationAnimation} 2s linear infinite;
  span {
    font-size: 30px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
const BoxAnimationTwo = styled.div`
  width: 100px;
  height: 100px;
  background: cornflowerblue;
  animation: ${rotationAnimationTwo} 2s linear infinite;
`;

export default App;
