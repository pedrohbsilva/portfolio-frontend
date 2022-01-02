import styled from 'styled-components'

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
  section{
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    p{
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      flex-direction: column;
      padding: 8px;
      span{
        font-weight: bold;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 20px 10px 20px 10px;
  }
`

type HeaderProps = {
  open: boolean;
}

export const HeaderMenu = styled.button<HeaderProps>`
  background: none;
  border: none;
  display: none;
  height: 30px;
  margin: 8px;
  right: -10px;
  z-index: 20;
  @media (max-width: 768px) {
    cursor: pointer;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    margin: 0;
    position: ${({ open }) => open ? 'fixed' : 'relative'};
    right: 20px;
  }
  div {
    background-color: ${({ theme }) => theme.colors.especial};
    height: ${({ theme }) => theme.spacings.extraSmall};
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 30.5px;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const HeaderNav = styled.nav<HeaderProps>`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  min-width: 15%;
  width: 60%;
  a{
    align-items: center;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.borderEspecial};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-family: "Montserrat", sans-serif;
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

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 8.5rem;
    justify-content: flex-start;
    transition: transform 0.3s ease-in-out;
    border-left: 1px solid ${({ theme }) => theme.colors.text};
  }
`
