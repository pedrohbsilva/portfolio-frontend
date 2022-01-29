import styled from 'styled-components';

export const LogoNameContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  p {
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    padding: 8px;
    font-weight: bold;

    span {
      font-weight: normal;
      opacity: 0.5;
    }
  }
`;
