import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smothing: antialiased;
    background: #333;
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
