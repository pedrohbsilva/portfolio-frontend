import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactElement,
} from 'react';

import { AppData } from '../interfaces';

const AppContext = createContext<AppData>({} as AppData);

const AppProvider = ({ children }): ReactElement => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp(): AppData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
}
export { AppProvider, useApp };
