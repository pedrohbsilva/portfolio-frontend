import styled from 'styled-components'

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.linear};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: 500;
  height: 56px;
  padding: ${({ theme }) => theme.spacings.extraSmall};
  transition: opacity 0.3s;
  width: auto;
  padding: 0 16px;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacings.small};
  }
`
