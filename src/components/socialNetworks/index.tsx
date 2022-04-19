import { ReactElement } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { theme } from 'src/styles/theme';

import { SocialNetworksContainer } from './styles';
const SocialNetworks = (): ReactElement => {
  return (
    <SocialNetworksContainer>
      <a
        title="LinkedIn"
        href="https://www.linkedin.com/in/pedro-h-b-da-silva/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SiLinkedin size={35} color={theme.colors.especial} />
      </a>

      <a
        title="GitHub"
        href="https://github.com/pedrohbsilva/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SiGithub size={35} color={theme.colors.especial} />
      </a>
    </SocialNetworksContainer>
  );
};

export default SocialNetworks;
