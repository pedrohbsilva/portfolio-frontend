import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: none;
    }

    html {
      font-size: 62.5%;

      @media only screen and (max-width: 768px) {
        font-size: 60%;
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }

    body {
      height: 100vh;
      font-family: 'Montserrat', sans-serif;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.text};
      background: ${theme.colors.background};
    }

    #__next {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.text};
    }
    button,
    a {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  `}
`;
