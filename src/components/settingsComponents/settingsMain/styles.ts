import styled from 'styled-components';

export const SettingsMainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-between;
  padding: 8px;

  section {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      text-align: center;
      width: 100%;
      font-size: 22px;
      font-weight: bold;
      padding: 4px;
    }
    div {
      align-items: center;
      display: flex;
      flex-direction: row-reverse;
      padding: 8px;
    }
  }
  @media only screen and (max-width: 768px) {
    section {
      width: 60%;
    }
  }
`;
