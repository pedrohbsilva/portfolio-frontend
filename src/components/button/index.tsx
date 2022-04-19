import { useRouter } from 'next/router';

import { ButtonHTMLAttributes, ReactElement } from 'react';

import { languages } from '../../locales';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
const Button = ({ children, loading, ...rest }: ButtonProps): ReactElement => {
  const { locale } = useRouter();
  const myLocales = typeof locale === 'string' ? locale : 'pt-BR';

  return (
    <Container type="button" {...rest}>
      {loading ? (languages[myLocales].loading as string) : children}
    </Container>
  );
};

export default Button;
