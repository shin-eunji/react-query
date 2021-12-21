import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import App from './App';
import Dark from "./Dark";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}
const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Dark/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
