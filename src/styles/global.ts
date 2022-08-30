import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Katwijkmono";
    src: url("/fonts/Katwijkmono/Katwijkmono-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Recoleta";
    src: url("/fonts/Recoleta/Recoleta-Black.ttf");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }
  
  :root {
    font-size: 62.5%;

    body {
      margin: 0;
      font-size: 1.6rem;
      background-color: #100F13;
    }
  }

  html, body, div, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, placeholder,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Recoleta', sans-serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a, button {
    cursor: pointer !important;
  }

  button {
    border: none;
  }

  li {
    list-style: none;
  }

  a, p {
    font-family: 'Katwijkmono', sans-serif;
  }

  input:focus {
    outline: none;
  }
}
`
