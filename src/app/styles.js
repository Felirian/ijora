import {createGlobalStyle} from "styled-components";
import {COLORS} from "./variables";
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //border: 1px solid pink;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 8vw;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    background-color: ${COLORS.white};
    color: ${COLORS.black};    
  }

  @font-face {
    font-family: 'Benzin';
    src: local("Benzin"), url('/fonts/Benzin-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto Light';
    src: local("Benzin"), url('/fonts/Roboto-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto Regular';
    src: local("Benzin"), url('/fonts/Roboto-Regular.ttf') format('truetype');
  }

  //------TEXT-TAGS-------\\
  a {
    text-decoration: none;
    color: inherit;
    transition: 0.5s;
    &:hover {
      opacity: 0.5;
    }
  }
`