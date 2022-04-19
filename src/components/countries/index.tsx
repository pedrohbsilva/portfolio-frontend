import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { languages } from 'src/locales';

import { CountriesContainer } from './styles';

const Countries = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { ptBR, enUS } = languages[myLocales];
  return (
    <CountriesContainer>
      <Link href="/pt-BR" passHref locale={ptBR}>
        <a style={{ height: 50 }}>
          <Image
            loading="lazy"
            src="/images/logo_brazil.svg"
            alt="pt-BR"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <Link href="/en-US" passHref locale={enUS}>
        <a style={{ height: 50 }}>
          <Image
            loading="lazy"
            src="/images/logo_usa.svg"
            alt="en-US"
            width={50}
            height={50}
          />
        </a>
      </Link>
    </CountriesContainer>
  );
};

export default Countries;
