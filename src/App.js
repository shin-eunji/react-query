import styled from "styled-components";

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

export default App;
