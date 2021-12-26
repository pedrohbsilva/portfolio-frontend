import styled from 'styled-components'

export const Container = styled.button`
  background: linear-gradient(90deg, #00FFFF 0%, #7000FF 109.38%);
  height: 56px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  width: auto;
  font-size: 20px;
  font-weight: 500;
  margin-top: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
`
