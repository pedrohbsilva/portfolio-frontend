import Image from 'next/image'
import { useState } from 'react'

import { FaUserAlt, FaMicroblog, FaHome } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useRouter } from 'next/router'

import { HeaderProps } from 'src/interfaces'

import Seo from '../SEO'

import { languages } from '../../locales'
import {
  HeaderContainer,
  HeaderMenu,
  HeaderNav
} from './styles'
const Header = ({ pageName }:HeaderProps): React.ReactElement => {
  const { locale } = useRouter()
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR'
  const [open, setOpen] = useState(false)

  console.log(process.env.NEXT_PUBLIC_SITE_NAME)

  return (
    <>
      <Seo title={`${pageName} | ${process.env.NEXT_PUBLIC_SITE_NAME}`} />
      <HeaderContainer>
        <section>
          <Image
            loading='lazy'
            src='/vercel.svg' alt='My Image'
            width={50}
            height={50}
          />
          <p>
            <span>Pedro</span>
            Henrique
          </p>
        </section>
        <HeaderMenu
          open={open}
          onClick={() => setOpen(!open)}
          type='button'
          aria-label='menu'
        >
          <div />
          <div />
          <div />
        </HeaderMenu>
        <HeaderNav open={open}>
          <a>
            {languages[myLocales].home as string}
            <FaHome style={{ marginLeft: 8 }} size={20} color='#21B5FF' />
          </a>
          <a>
            Blog
            <FaMicroblog style={{ marginLeft: 8 }} size={20} color='#21B5FF' />
          </a>
          <a>
            Docência
            <GiHamburgerMenu style={{ marginLeft: 8 }} size={20} color='#21B5FF' />
          </a>
          <a>
            Portfólio
            <FaUserAlt style={{ marginLeft: 8 }} size={20} color='#21B5FF' />
          </a>
        </HeaderNav>
      </HeaderContainer>
    </>
  )
}

export default Header
