import styled, { css } from 'styled-components';

import { DarkmodeProps } from 'src/interfaces';

export const Li = styled.article<DarkmodeProps>`
  margin: 0 auto;
  font-size: 20%;
  position: relative;
  height: 16em;
  width: 30em;
  border-radius: 10em;
  border: 1px solid ${({ theme }) => theme.colors.borderEspecial};
  transition: all 500ms ease-in-out;
  background: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 15%;
    margin: 4px;
  }
`;

export const Icon = styled.a<DarkmodeProps>`
  position: absolute;
  display: block;
  border-radius: 50%;
  background: none;
  border: 0;
  text-decoration: none;
  transition: all 400ms ease-in-out;
  ${({ lightTheme, theme }) =>
    lightTheme
      ? css`
          top: 3em;
          left: 3em;
          transform: rotate(-75deg);
          width: 10em;
          height: 10em;
          box-shadow: 3em 2.5em 0 0em ${theme.colors.switchColor} inset,
            ${theme.colors.switchColor} -2em 15em 0 -4.5em,
            ${theme.colors.switchColor} 3em 7em 0 -4.5em,
            ${theme.colors.switchColor} 2em 13em 0 -4em,
            ${theme.colors.switchColor} 6em 2em 0 -4.1em,
            ${theme.colors.switchColor} 8em 8em 0 -4.5em,
            ${theme.colors.switchColor} 6em 13em 0 -4.5em,
            ${theme.colors.switchColor} -4em 7em 0 -4.5em,
            ${theme.colors.switchColor} -1em 10em 0 -4.5em;
        `
      : css`
          top: 4.5em;
          left: 18em;
          transform: rotate(0deg);
          width: 7em;
          height: 7em;
          box-shadow: 3em 3em 0 5em ${theme.colors.switchColor} inset,
            0 -5em 0 -2.7em ${theme.colors.switchColor},
            3.5em -3.5em 0 -3em ${theme.colors.switchColor},
            5em 0 0 -2.7em ${theme.colors.switchColor},
            3.5em 3.5em 0 -3em ${theme.colors.switchColor},
            0 5em 0 -2.7em ${theme.colors.switchColor},
            -3.5em 3.5em 0 -3em ${theme.colors.switchColor},
            -5em 0 0 -2.7em ${theme.colors.switchColor},
            -3.5em -3.5em 0 -3em ${theme.colors.switchColor};
        `}
`;
