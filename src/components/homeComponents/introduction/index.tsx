import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Button from 'src/components/button';

import SocialNetworks from 'src/components/socialNetworks';
import { languages } from 'src/locales';

import { IntroductionContainer } from './styles';
const Introduction = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { hello, aboutMe, contact } = languages[myLocales];
  return (
    <IntroductionContainer>
      <div>
        <h1>{hello}</h1>
        <p>{aboutMe}</p>
        <Button>{contact}</Button>
        <SocialNetworks />
      </div>
      <Image
        src="/images/logo_people.svg"
        alt="My Image"
        width={1000}
        height={1000}
        loading="lazy"
      />
    </IntroductionContainer>
  );
};

export default Introduction;
