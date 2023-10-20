import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     #__next {
   position: relative;
  }

  html {
    scroll-behavior: smooth;

    color: #000;
    font-family: Manrope, sans-serif;
    font-size: 16px;
  }

  body {
    width: 100%;
    margin: 0;
    background-color: ${(props) => props.theme.bg};
    
   
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
`;
