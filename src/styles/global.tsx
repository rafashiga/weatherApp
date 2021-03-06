import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
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
