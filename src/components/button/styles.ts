import styled from 'styled-components';

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
  width: auto;
  padding: 0 16px;

  &:not(:disabled) {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  &:not(:disabled):after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:not(:disabled):active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacings.small};
  }
`;
