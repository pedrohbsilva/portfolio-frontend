export interface LocaleProps {
  message?: string;
  home?: string;
  copyright?: string;
}

export interface MessageProps {
  [key: string]: LocaleProps;
}

export interface FormProps{
  name: string;
  email: string;
  phone: string;
  information: string;
}

export interface HeaderProps{
  pageName: string;
}

export interface LinksContainerProps {
  active: boolean;
}

export interface SEOProps {
  title: string;
  description?: string;
}
