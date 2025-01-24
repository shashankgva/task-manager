import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Jost, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }

  input, textarea, button {
    font-family: 'Jost', sans-serif;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    background-color: #034EA2;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #034EA2;
  }
`;
