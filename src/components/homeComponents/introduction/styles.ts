import styled from 'styled-components'

export const IntroductionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  div{
    position: relative;
    margin-left: 45px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 70vh;
    z-index: 1;

    h1{
      font-size: ${({ theme }) => theme.font.sizes.superLarge};
      font-style: normal;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.text};
    }
    p{
      font-size: 16px;
      color: ${({ theme }) => theme.colors.text};
      font-style: normal;
      line-height: 22px;
      opacity: 0.8;
      text-align: justify;
      font-family: "Montserrat", sans-serif;
    }

  }
  span{
    z-index: -1;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 40px;
    div{
      text-align: justify;
      width: 95%;
      margin-left: 0;
      padding: 10px;
      align-items: center;
      height: 80vh;
      h1{
        font-size: 28px;
        padding-bottom: 8px;
      }
    }
  }
`
