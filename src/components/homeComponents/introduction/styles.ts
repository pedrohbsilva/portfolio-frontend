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
    height: 50vh;
    z-index: 1;

    h1{
      font-size: 36px;
      font-style: normal;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.black};
    }
    p{
      font-size: 16px;
      color: ${({ theme }) => theme.colors.black};
    }

  }
  span{
    z-index: -1;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 130px;
    div{
      text-align: justify;
      width: 95%;
      margin-left: 0;
      margin: 8px;
      align-items: center;

    }
  }
`
