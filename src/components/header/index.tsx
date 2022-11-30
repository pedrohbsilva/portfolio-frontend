import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { CgClose } from 'react-icons/cg';

import { HeaderProps } from 'src/interfaces';
import { theme } from 'src/styles/theme';

import Seo from '../SEO';
import { languages } from '../../locales';
import {
  HeaderContainer,
  HeaderLink,
  HeaderNav,
  LinksContainer,
} from './styles';
import Icon from '../icon';
import LogoName from '../logoName';

const Header = ({ pageName }: HeaderProps): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = (): void => setMenuIsOpen(!menuIsOpen);
  const handleLink = (): void => menuIsOpen && handleMenu();
  const keys = ['home', 'blog', 'teaching', 'portfolio', 'settings'];

  return (
    <>
      <Seo title={`${pageName} | ${process.env.NEXT_PUBLIC_SITE_NAME}`} />
      <HeaderContainer>
        <HeaderNav active={menuIsOpen}>
          <div>
            <button onClick={() => handleMenu()}>
              {menuIsOpen ? (
                <CgClose color={theme.colors.especialPlus} />
              ) : (
                <GiHamburgerMenu color={theme.colors.especialPlus} />
              )}
            </button>
          </div>
          <LogoName />
          <div />
          <LinksContainer active={menuIsOpen}>
            {keys.map((key, index) => (
              <li key={key}>
                <Link
                  href={`/${index === 0 ? locale : locale + `/${key}`}`}
                  passHref
                  locale={locale}
                >
                  <HeaderLink onClick={() => handleLink()}>
                    {languages[myLocales][key] as string}
                    <Icon
                      type={key}
                      style={{ marginLeft: 8 }}
                      size={20}
                      color={`${theme.colors.especial}`}
                    />
                  </HeaderLink>
                </Link>
              </li>
            ))}
          </LinksContainer>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
