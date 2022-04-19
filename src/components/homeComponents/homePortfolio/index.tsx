import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { languages } from 'src/locales';

import { HomePortfolioContainer } from './styles';
const HomePortfolio = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { portfolio, portfolioMessage } = languages[myLocales];
  return (
    <HomePortfolioContainer>
      <div>
        <h1>{portfolio}</h1>
        <p>{portfolioMessage}</p>
      </div>
    </HomePortfolioContainer>
  );
};

export default HomePortfolio;
