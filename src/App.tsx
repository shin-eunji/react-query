import React, { useState } from "react";
import styled from 'styled-components';
import {css} from "styled-components";
// import Circle from './Circle';

function App () {

  const [value, setValue] = useState("")
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    const { currentTarget: {value} } = e;
    setValue(value)
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", value);
  };

  const Container = styled.div`
    background: ${props => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${props => props.theme.textColor};
  `;
  const Button = styled.button`
    background: ${props => props.theme.btnColor};
    color: ${props => props.theme.textColor};
  `;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value}
               onChange={onChange}
               type="text"
               placeholder="username"
        />
        <button>Log in</button>
      </form>

      <Container>
        <H1>protected</H1>
        <Button>Log in</Button>
      </Container>
      {/*<Circle bgColor={"teal"} borderColor={"yellow"} />*/}
      {/*<Circle text={"Title"} bgColor={"tomato"} />*/}

    </div>
  );
}

export default App;
