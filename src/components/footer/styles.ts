import styled from 'styled-components';

export const FooterContainer = styled.footer`
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px 20px 40px;
  position: relative;
  width: 100%;
  section {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding: 20px 10px 20px 10px;
  }
`;

export const FooterText = styled.p`
  margin-left: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
