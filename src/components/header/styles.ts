import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px 20px 40px;
  margin-bottom: -150px;
  z-index: 10;
  section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p{
      display: flex;
      flex-direction: column;
      padding: 8px;
      color: ${props => props.theme.colors.black};
      span{
        font-weight: bold;
      }
    }
  }
`

type HeaderProps = {
  open: boolean;
}

export const HeaderMenu = styled.button<HeaderProps>`
  height: 30px;
  margin: 8px;
  border: none;
  background: none;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: ${({ open }) => open ? 'absolute' : 'relative'};
    padding-right: ${({ open }) => open ? '40px' : 0};
    right: 0;
    cursor: pointer;
  }
  div {
    width: 3rem;
    height: 0.4rem;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.3s linear;
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
  display: flex;
  width: 60%;
  min-width: 15%;
  align-items: center;
  justify-content: space-evenly;
  a{
    width: 200px;
    margin: 8px;
    border: 1px solid #CCDFFF;
    background: none;
    border-radius: 8px;
    padding: 16px 8px 16px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => props.theme.colors.black};
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    text-decoration: none;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: #CCDFFF;
    }
    &:active {
      background: #EDDDDD;
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
    border-left: 1px solid black;
    li {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      border-bottom: 1px solid black;
      &:nth-child(1){
        margin-top: 30px;
      }
    }

  }
`
