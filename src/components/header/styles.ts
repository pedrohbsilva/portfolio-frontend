import styled, { css } from 'styled-components';
interface LinksContainerProps {
  active: boolean;
}

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

  section {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    p {
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      flex-direction: column;
      padding: 8px;
      span {
        font-weight: bold;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const HeaderNav = styled.nav<LinksContainerProps>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
    width: 100%;
    @media only screen and (min-width: 1440px) {
      max-width: ${theme.spacings.containerLarge};
    }

    a {
      align-items: center;
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.borderEspecial};
      border-radius: 8px;
      color: ${({ theme }) => theme.colors.text};
      cursor: pointer;
      display: flex;
      flex-direction: row;
      font-family: 'Montserrat', sans-serif;
      font-size: ${({ theme }) => theme.font.sizes.small};
      font-weight: bold;
      justify-content: center;
      margin: ${({ theme }) => theme.spacings.small};
      padding: 16px;
      text-decoration: none;
      transition: background 0.3s ease-in-out;
      width: ${({ theme }) => theme.spacings.bigLarge};
      &:hover {
        background: ${({ theme }) => theme.colors.borderEspecial};
      }
      &:active {
        background: ${({ theme }) => theme.colors.border};
      }
    }
    div {
      display: none;
    }
    button {
      z-index: 12;
      display: none;
      background: none;
      border: 0;
      position: ${active ? 'fixed' : 'relative'};
      top: ${active ? 25 : 0}px;
      @media only screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
      }

      svg {
        font-size: ${theme.font.sizes.superLarge};
        color: ${theme.colors.text};
      }
    }
    @media only screen and (max-width: 768px) {
      li {
        border-bottom: 1px solid #c4c4c4;
      }
      a {
        border: 0;
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

    @media only screen and (max-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      flex-direction: column;
      justify-content: center;
      width: 65%;
      height: 100vh;
      font-size: ${theme.font.sizes.large};
      background: ${theme.colors.background};
      transform: ${active ? 'translateX(0)' : 'translateX(-100%)'};
      opacity: ${active ? 1 : 0};
      visibility: ${active ? 'visible' : 'hidden'};
      transition: 0.3s ease-in-out;

      a:hover::after {
        width: initial;
      }
    }
  `}
`;
