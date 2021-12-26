import type { NextPage } from 'next'

import { useRouter } from 'next/router'

import Footer from 'src/components/footer'

import Header from 'src/components/header'
import Introduction from 'src/components/homeComponents/introduction'

import { languages } from '../locales'
const Home: NextPage = ():React.ReactElement => {
  const { locale } = useRouter()
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR'
  return (
    <>
      <Header pageName={languages[myLocales].home as string} />
      <Introduction />
      <Footer />
    </>
  )
}

export default Home
