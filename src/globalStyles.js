import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --bg-header: #000000;
    --blue: #2d46b9;
    --text-base: white;
    --text-secondary: black;
    --text: #FFB70D;
    --green1: #1db954;
    --gray1: #c1c3c6;
    --gray2: #919496;
    --gray3: #616467;
    --primary-bg: #ff7700;
    --hero-bg-color: #FFB70D;
    --hero-terms-link: #efefef;
  }

  *,
  *::after,
  *::before {
    @import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap);
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Open Sans', sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Ari", Sans-Serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

`;

export default GlobalStyle;
