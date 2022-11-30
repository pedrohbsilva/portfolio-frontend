import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Footer from 'src/components/footer';

import Header from 'src/components/header';

import { languages } from '../locales';
const Portfolio = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { portfolio } = languages[myLocales];
  return (
    <>
      <Header pageName={portfolio} />
      <p>{portfolio}</p>
      <Footer />
    </>
  );
};

export default Portfolio;
