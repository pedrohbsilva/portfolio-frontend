export interface AppData {
  theme: string;
  toggleTheme: () => void;
}

export interface DarkmodeProps {
  lightTheme: boolean;
}

export interface FormProps {
  name: string;
  email: string;
  phone: string;
  information: string;
}

export interface HeaderProps {
  pageName: string;
}

export interface LinksContainerProps {
  active: boolean;
}

export interface LocaleProps {
  aboutMe?: string;
  blog?: string;
  contact?: string;
  copyright?: string;
  darkMode?: string;
  enUS?: string;
  hello?: string;
  home?: string;
  language?: string;
  loading?: string;
  message?: string;
  portfolio?: string;
  portfolioMessage?: string;
  ptBR?: string;
  teaching?: string;
}
export interface MessageProps {
  [key: string]: LocaleProps;
}

export interface SEOProps {
  title: string;
  description?: string;
}
