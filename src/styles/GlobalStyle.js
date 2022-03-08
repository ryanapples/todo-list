import { createGlobalStyle } from 'styled-components';
import variables from './variables';

// declare variable import within createGlobalStyles
// grants access to css helper function (:root) styles

const GlobalStyle = createGlobalStyle`
  ${variables};

  html, body {
    overflow: hidden;
  }
  
  body {
    background-color: var(--background-color);
    background-image: var(--background-image);
    font-family: var(--font-family)
  }

  input, button {
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;
