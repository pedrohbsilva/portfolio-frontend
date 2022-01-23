import { useRouter } from 'next/router';

import { languages } from 'src/locales';

import { HomePortfolioContainer } from './styles';
const HomePortfolio = (): React.ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';

  return (
    <HomePortfolioContainer>
      <div>
        <h1>{languages[myLocales].portfolio as string}</h1>
        <p>{languages[myLocales].portfolioMessage as string}</p>
      </div>
    </HomePortfolioContainer>
  );
};

export default HomePortfolio;
