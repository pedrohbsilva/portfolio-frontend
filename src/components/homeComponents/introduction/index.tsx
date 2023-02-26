import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

import Button from 'src/components/button';

import SocialNetworks from 'src/components/socialNetworks';
import { languages } from 'src/locales';
import { githubApi } from 'src/services/api.service';
import { getTextReadme } from 'src/utils/functions';

import { IntroductionContainer } from './styles';
const Introduction = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { hello, contact } = languages[myLocales];
  const [aboutMe, setAboutMe] = useState('');

  useEffect(() => {
    const load = async (): Promise<void> => {
      const response = await githubApi.get(
        '/repos/pedrohbsilva/pedrohbsilva/readme',
      );
      const textReadmeDecoded = decodeURIComponent(
        escape(window.atob(response.data.content)),
      );
      const textParsed = getTextReadme(textReadmeDecoded, myLocales);
      setAboutMe(textParsed);
    };
    load();
  }, [myLocales]);

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
        width={1200}
        height={1200}
        loading="lazy"
      />
    </IntroductionContainer>
  );
};

export default Introduction;
