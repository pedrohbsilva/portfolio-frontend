import { useRouter } from 'next/router';

import Footer from 'src/components/footer';

import Header from 'src/components/header';
import HomePortfolio from 'src/components/homeComponents/homePortfolio';
import Introduction from 'src/components/homeComponents/introduction';

import { languages } from '../locales';
const Home = (): React.ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  return (
    <>
      <Header pageName={languages[myLocales].home as string} />
      <Introduction />
      <HomePortfolio />
      <Footer />
    </>
  );
};

export default Home;
