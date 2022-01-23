import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.border};
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px 20px 40px;
  width: 100%;
  section {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    p {
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      flex-direction: column;
      padding: ${({ theme }) => theme.spacings.extraSmall};
      span {
        font-weight: bold;
      }
      &:nth-child(3) {
        margin-left: 20px;
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 20px 10px 20px 10px;
  }
`;
