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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export default App;
