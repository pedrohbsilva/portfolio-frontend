import styled, { css } from 'styled-components';

import { LinksContainerProps } from 'src/interfaces';

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100px;
  justify-content: space-between;
  margin-bottom: -50px;
  padding: 20px 40px 20px 40px;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    padding: 0;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const HeaderLink = styled.a`
  ${({ theme }) => css`
    align-items: center;
    background: none;
    border: 1px solid ${theme.colors.borderEspecial};
    border-radius: 8px;
    color: ${theme.colors.text};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-family: 'Montserrat', sans-serif;
    font-size: ${theme.font.sizes.small};
    font-weight: bold;
    justify-content: center;
    margin: ${theme.spacings.small};
    padding: 16px;
    text-decoration: none;
    width: fit-content;

    &:not(:disabled) {
      position: relative;
      overflow: hidden;
      transform: translate3d(0, 0, 0);
    }

    &:not(:disabled):after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #bbb 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform 0.5s, opacity 1s;
    }

    &:not(:disabled):active:after {
      transform: scale(0, 0);
      opacity: 0.3;
      transition: 0s;
    }
    @media only screen and (max-width: 768px) {
      border: 0;
      width: 100%;
      margin: 0;
      justify-content: flex-start;
      svg {
        display: none;
      }
    }
  `}
`;

export const HeaderNav = styled.nav<LinksContainerProps>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;

    @media only screen and (min-width: 1440px) {
      max-width: ${theme.spacings.containerLarge};
    }

    div {
      display: none;
    }
    button {
      z-index: 12;
      display: none;
      background: none;
      border: 0;
      outline: none;
      position: ${active ? 'fixed' : 'relative'};
      top: ${active ? 25 : 0}px;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.5;
      }
      &:active {
        opacity: 1;
      }
      @media only screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
        &:active {
          border-style: outset;
          outline: none;
          box-shadow: none;
          outline-offset: none;
        }
      }
      svg {
        font-size: ${theme.font.sizes.superLarge};
        color: ${theme.colors.text};
      }
    }
    @media only screen and (max-width: 768px) {
      background-color: ${active ? 'rgba(0, 0, 0, 0.5);' : ''};
      box-shadow: ${active ? '0 0 0 10000px rgba(0, 0, 0, 0.5);' : ''};
      transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      padding: ${theme.spacings.medium} ${theme.spacings.medium};
      z-index: 997;
      li {
        border-bottom: 1px solid #c4c4c4;
      }
      div {
        display: block;
        width: 25%;
      }
      section {
        width: 50%;
      }
    }
  `}
`;

export const LinksContainer = styled.ul<LinksContainerProps>`
  ${({ theme, active }) => css`
    list-style: none;
    display: flex;
    p {
      display: none;
    }
    @media only screen and (max-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      flex-direction: column;
      justify-content: center;
      width: 70%;
      height: 100vh;
      font-size: ${theme.font.sizes.large};
      background: ${theme.colors.background};
      transform: ${active ? 'translateX(0)' : 'translateX(-100%)'};
      opacity: ${active ? 1 : 0};
      visibility: ${active ? 'visible' : 'hidden'};
      transition: 0.3s ease-in-out;
      p {
        display: block;
        color: ${theme.colors.text};
        font-family: 'Montserrat', sans-serif;
        font-size: ${theme.font.sizes.small};
        font-weight: bold;
        padding: 0 16px 0 16px;
      }
      a:hover::after {
        width: initial;
      }
    }
  `}
`;
