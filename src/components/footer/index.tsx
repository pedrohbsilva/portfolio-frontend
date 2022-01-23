import Image from 'next/image';
import { useRouter } from 'next/router';

import { languages } from '../../locales';
import SocialNetworks from '../socialNetworks';
import { ContainerFooter } from './styles';
const Footer = (): React.ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';

  return (
    <ContainerFooter>
      <section>
        <Image
          loading="lazy"
          src="/vercel.svg"
          alt="My Image"
          width={50}
          height={50}
        />
        <p>
          <span>Pedro</span>
          Henrique
        </p>
        <p>{languages[myLocales].copyright as string}</p>
      </section>
      <SocialNetworks />
    </ContainerFooter>
  );
};

export default Footer;
