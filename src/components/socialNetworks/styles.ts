import styled from 'styled-components'

export const SocialNetworksContainer = styled.nav`
  display: flex;
  max-width: 35%;
  min-width: 15%;
  justify-content: flex-start;
  a{
    margin-right: 30px;
  }
  @media only screen and (max-width: 700px) {
    width: 30%;
    justify-content: space-between;

    a{
    margin-right: 0px;
    }
  }
`
