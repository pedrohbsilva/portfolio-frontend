import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ReactElement } from 'react';

import { AppProvider, useApp } from 'src/hooks';

import { theme as lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';
function MyApp({ Component, pageProps }: AppProps): ReactElement {
  function App(): JSX.Element {
    const { theme } = useApp();
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default MyApp;
