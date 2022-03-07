import { createGlobalStyle } from 'styled-components';
import variables from './variables';

// declare variable import within createGlobalStyles
// grants access to css helper function (:root) styles

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    overflow: hidden;
  }
  
  body {
    background-color: var(--background-color);
    background-image: var(--background-image);
  }
`;

export default GlobalStyle;
