import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /*@font-face {
    font-family: Manrope;
    src: url('/assets/fonts/Manrope/Manrope-Regular.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: Manrope;
    src: url('/assets/fonts/Manrope/Manrope-Medium.ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: Manrope;
    src: url('/assets/fonts/Manrope/Manrope-SemiBold.ttf');
    font-weight: 600;
  }*/

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

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
`;
