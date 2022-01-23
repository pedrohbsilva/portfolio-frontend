import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaMicroblog, FaHome } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { CgClose } from 'react-icons/cg';

import { HeaderProps } from 'src/interfaces';
import { theme } from 'src/styles/theme';

import Seo from '../SEO';
import { languages } from '../../locales';
import { HeaderContainer, HeaderNav, LinksContainer } from './styles';

const Header = ({ pageName, title }: HeaderProps): React.ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = (): void => setMenuIsOpen(!menuIsOpen);
  const handleLink = (): void => menuIsOpen && handleMenu();

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

          <section>
            <Image
              loading="lazy"
              src="/vercel.svg"
              alt="My Image"
              width={50}
              height={50}
            />
            <p>
              <span>Pedro</span>
              Henrique
            </p>
          </section>
          <div />

          <LinksContainer active={menuIsOpen}>
            <li>
              <Link href={`/${locale}`}>
                <a
                  style={{
                    border:
                      title === 'home' && `2px solid ${theme.colors.especial}`,
                  }}
                  onClick={() => handleLink()}
                >
                  {languages[myLocales].home as string}
                  <FaHome
                    style={{ marginLeft: 8 }}
                    size={20}
                    color={`${theme.colors.especial}`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`}>
                <a
                  style={{
                    border:
                      title === 'blog' && `2px solid ${theme.colors.especial}`,
                  }}
                  onClick={() => handleLink()}
                >
                  {languages[myLocales].blog as string}
                  <FaMicroblog
                    style={{ marginLeft: 8 }}
                    size={20}
                    color={`${theme.colors.especial}`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/teaching`}>
                <a
                  style={{
                    border:
                      title === 'teaching' &&
                      `2px solid ${theme.colors.especial}`,
                  }}
                  onClick={() => handleLink()}
                >
                  {languages[myLocales].teaching as string}
                  <GiHamburgerMenu
                    style={{ marginLeft: 8 }}
                    size={20}
                    color={`${theme.colors.especial}`}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/portfolio`}>
                <a
                  style={{
                    border:
                      title === 'portfolio' &&
                      `2px solid ${theme.colors.especial}`,
                  }}
                  onClick={() => handleLink()}
                >
                  {languages[myLocales].portfolio as string}
                  <FaUserAlt
                    style={{ marginLeft: 8 }}
                    size={20}
                    color={`${theme.colors.especial}`}
                  />
                </a>
              </Link>
            </li>
          </LinksContainer>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
