import Image from 'next/image'
import { useRouter } from 'next/router'

import Button from 'src/components/button'

import SocialNetworks from 'src/components/socialNetworks'
import { languages } from 'src/locales'

import { IntroductionContainer } from './styles'
const Introduction = (): React.ReactElement => {
  const { locale } = useRouter()
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR'

  return (
    <IntroductionContainer>
      <div>
        <h1>
          {languages[myLocales].hello as string}
        </h1>
        <p>
          {languages[myLocales].aboutMe as string}
        </p>
        <Button>
          {languages[myLocales].contact as string}
        </Button>
        <SocialNetworks />
      </div>
      <Image
        src='/images/logo_people.svg' alt='My Image'
        width={1000}
        height={1000}
        loading='lazy'
      />
    </IntroductionContainer>
  )
}

export default Introduction
