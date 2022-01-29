import { useRouter } from 'next/router';

import { languages } from '../../locales';
import LogoName from '../logoName';
import SocialNetworks from '../socialNetworks';
import { FooterContainer, FooterText } from './styles';
const Footer = (): React.ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';

  return (
    <FooterContainer>
      <section>
        <LogoName />
        <FooterText>{languages[myLocales].copyright as string}</FooterText>
      </section>
      <SocialNetworks />
    </FooterContainer>
  );
};

export default Footer;
