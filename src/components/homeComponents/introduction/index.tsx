import Image from 'next/image'

import Button from 'src/components/button'

import SocialNetworks from 'src/components/socialNetworks'

import { IntroductionContainer } from './styles'
const Introduction = (): React.ReactElement => {
  return (
    <IntroductionContainer>
      <div>
        <h1>
          Olá! Eu sou o Pedro
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam diam, suscipit in
          mauris eget, pharetra fringilla ligula. Sed vel tincidunt mauris. Etiam libero turpis, auctor
          quis pellentesque ac, congue vel tortor. Aliquam erat volutpat. Aliquam faucibus porta nulla
          ac pellentesque. Donec iaculis augue et mattis ullamcorper.
        </p>
        <Button>
          Entre em contato
        </Button>
        <SocialNetworks />
      </div>
      <Image
        loading='lazy'
        src='/images/logo_people.svg' alt='My Image'
        width={800}
        height={700}
      />
    </IntroductionContainer>
  )
}

export default Introduction
