import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px 20px 40px;
  border: 1px solid #E8E8E8;
  bottom: 0;
  section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p{
      display: flex;
      flex-direction: column;
      padding: 8px;
      color: ${props => props.theme.colors.black};
      span{
        font-weight: bold;
      }
      &:nth-child(3){
        margin-left: 20px;
        @media (max-width: 768px) {
          display: none;
        }
      }
    }

  }
`
