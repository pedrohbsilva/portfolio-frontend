export interface LocaleProps {
  aboutMe?: string;
  blog?: string;
  contact?: string;
  copyright?: string;
  hello?: string;
  home?: string;
  loading?: string;
  message?: string;
  portfolio?: string;
  portfolioMessage?: string;
  teaching?: string;
}

export interface MessageProps {
  [key: string]: LocaleProps;
}

export interface FormProps {
  name: string;
  email: string;
  phone: string;
  information: string;
}

export interface HeaderProps {
  pageName: string;
  title: string;
}

export interface LinksContainerProps {
  active: boolean;
}

export interface SEOProps {
  title: string;
  description?: string;
}
