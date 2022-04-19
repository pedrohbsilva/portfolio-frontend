import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Footer from 'src/components/footer';

import Header from 'src/components/header';
import HomePortfolio from 'src/components/homeComponents/homePortfolio';
import Introduction from 'src/components/homeComponents/introduction';

import { languages } from '../locales';
const Home = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { home } = languages[myLocales];
  return (
    <>
      <Header pageName={home} />
      <Introduction />
      <HomePortfolio />
      <Footer />
    </>
  );
};

export default Home;
