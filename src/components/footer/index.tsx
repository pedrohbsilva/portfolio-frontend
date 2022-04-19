import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { languages } from '../../locales';
import LogoName from '../logoName';
import SocialNetworks from '../socialNetworks';
import { FooterContainer, FooterText } from './styles';
const Footer = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { copyright } = languages[myLocales];
  return (
    <FooterContainer>
      <section>
        <LogoName />
        <FooterText>{copyright}</FooterText>
      </section>
      <SocialNetworks />
    </FooterContainer>
  );
};

export default Footer;
