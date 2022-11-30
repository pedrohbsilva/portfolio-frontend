import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Footer from 'src/components/footer';

import Header from 'src/components/header';

import SettingsMain from 'src/components/settingsComponents/settingsMain';

import { languages } from '../locales';
const Settings = (): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';
  const { settings } = languages[myLocales];
  return (
    <>
      <Header pageName={settings} />
      <SettingsMain />
      <Footer />
    </>
  );
};

export default Settings;
