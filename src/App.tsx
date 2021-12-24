import React, { useState } from "react";
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
      {/*<Circle bgColor={"teal"} borderColor={"yellow"} />*/}
      {/*<Circle text={"Title"} bgColor={"tomato"} />*/}
    </div>
  );
}

export default App;
