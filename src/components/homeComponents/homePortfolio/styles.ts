import styled from 'styled-components';

export const HomePortfolioContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  div {
    h1 {
      font-size: 36px;
      color: ${({ theme }) => theme.colors.text};
      font-style: normal;
      font-weight: normal;
      line-height: 44px;
      text-align: center;
      margin-bottom: 8px;
    }
    p {
      text-align: center;
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
    }
  }
`;
