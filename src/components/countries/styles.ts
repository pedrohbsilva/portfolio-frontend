import styled from 'styled-components';

export const CountriesContainer = styled.li`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    margin: 0 8px 0 8px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 4px 4px 4px 8px;
    justify-content: flex-start;
  }
`;
