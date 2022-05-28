
// import './App.css';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';

const GlobalStyle = createGlobalStyle `
html {
  box-sizing: border-box;
  }
*,
*::before,
*::after {
  box-sizing: border-box;
},
body {
  margin: 0;
  bacrground-color: #f0f0f0;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: red;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-stylr: none;
  padding: 0;
  margin: 0;
}
h1, h2, h3{
  font-family: 'Pacifico', cursive;
  padding: 0;
  margin: 0;
}
p {
  padding: 0;
  margin: 0;
}
img {
  max-wight: 100%;
  height: auto;
}
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
    </>
  );
}

export default App;
