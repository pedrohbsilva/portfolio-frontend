import styled from 'styled-components';

export const InputCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.background};
  border: 0.15em solid ${({ theme }) => theme.colors.borderEspecial};
  cursor: pointer;
  display: grid;
  font: inherit;
  height: 1.35em;
  margin: 0 5px 0 0;
  place-content: center;
  transform: translateY(-0.075em);
  width: 1.35em;

  &:checked {
    border: 0.2em solid ${({ theme }) => theme.colors.especial};
  }
  &::before {
    color: ${({ theme }) => theme.colors.text};
    content: 'L';
    font-size: 14px;
    font-weight: bold;
    transform: scale(0);
  }
  &:checked::before {
    transform: scaleX(-1) rotate(-45deg);
  }
`;
