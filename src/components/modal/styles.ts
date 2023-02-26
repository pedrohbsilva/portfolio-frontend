import styled from 'styled-components';

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  a {
    text-decoration: none;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const StyledModal = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 500px;
  border-radius: 15px;
  padding: 15px;
  border: 3px solid ${({ theme }) => theme.colors.especial};
`;
export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
