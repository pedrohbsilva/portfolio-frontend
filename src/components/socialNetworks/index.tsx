import { SiGithub, SiLinkedin } from 'react-icons/si'

import { SocialNetworksContainer } from './styles'
const SocialNetworks = (): React.ReactElement => {
  return (
    <SocialNetworksContainer>
      <a
        title='LinkedIn'
        href='https://www.linkedin.com/in/pedro-h-b-da-silva/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <SiLinkedin size={35} color='#21B5FF' />
      </a>

      <a
        title='GitHub'
        href='https://github.com/pedrohbsilva/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <SiGithub size={35} color='#21B5FF' />
      </a>
    </SocialNetworksContainer>
  )
}

export default SocialNetworks
