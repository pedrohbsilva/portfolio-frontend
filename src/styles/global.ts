import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
  --white: #ffffff;
  --grey-50: #e1e1e6;
  --grey-300: #a8a8b3;
  --grey-900: #121214;
  --MidnightBlue: #0C6980;
  --Cyan: #00A8A8;
  --Turquoise: #2EB5E0;
  --Serenity: #C4DBE0;
  }
  body {
    background: var(--white);
    color:  var(--Turquoise);
  }
  body,input,textarea,select,button{
    font: 400 1rem "Montserrat", sans-serif;
  }
  button{
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`
