import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
const Button = ({ children, loading, ...rest }: ButtonProps): React.ReactElement => {
  return (
    <Container type='button' {...rest}>
      {loading ? 'Carregando' : children}
    </Container>
  )
}

export default Button
