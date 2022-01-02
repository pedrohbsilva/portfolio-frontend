import { useRouter } from 'next/router'

import Footer from 'src/components/footer'

import Header from 'src/components/header'
import Introduction from 'src/components/homeComponents/introduction'

import { languages } from '../locales'
const Portfolio = ():React.ReactElement => {
  const { locale } = useRouter()
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR'
  return (
    <>
      <Header pageName={languages[myLocales].portfolio as string} title='portfolio' />
      <Introduction />
      <Footer />
    </>
  )
}

export default Portfolio
