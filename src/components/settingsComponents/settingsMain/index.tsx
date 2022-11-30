import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import RadioButtonLikeCheckBox from 'src/components/radioButtonLikeCheckBox';

import { languages } from 'src/locales';

import { useApp } from 'src/hooks';

import { SettingsMainContainer } from './styles';

const SettingsMain = (): ReactElement => {
  const router = useRouter();
  const { theme, toggleTheme } = useApp();

  const { asPath, locales, locale: activeLocale } = router;
  const { language, colorTheme } = languages[activeLocale];
  const languageName = {
    'pt-BR': 'portuguese',
    'en-US': 'english',
  };
  const themes = ['lightMode', 'darkMode'];

  return (
    <SettingsMainContainer>
      <section>
        <p>{language}</p>
        {locales.map((locale) => (
          <div key={locale}>
            <label htmlFor={locale}>
              {languages[activeLocale][languageName[locale]]}
            </label>
            <RadioButtonLikeCheckBox
              name={locale}
              id={locale}
              checked={activeLocale === locale}
              onChange={() => router.push(asPath, asPath, { locale })}
            />
          </div>
        ))}
      </section>
      <section>
        <p>{colorTheme}</p>
        {themes.map((themeName) => (
          <div key={themeName}>
            <label htmlFor={themeName}>
              {languages[activeLocale][themeName]}
            </label>
            <RadioButtonLikeCheckBox
              name={themeName}
              id={themeName}
              checked={theme === themeName}
              onChange={toggleTheme}
            />
          </div>
        ))}
      </section>
    </SettingsMainContainer>
  );
};

export default SettingsMain;
