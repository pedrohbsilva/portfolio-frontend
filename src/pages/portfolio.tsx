import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Footer from 'src/components/footer';

import Header from 'src/components/header';
import Introduction from 'src/components/homeComponents/introduction';

import { languages } from '../locales';
const Portfolio = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { portfolio } = languages[myLocales];
  return (
    <>
      <Header pageName={portfolio} />
      <Introduction />
      <Footer />
    </>
  );
};

export default Portfolio;
