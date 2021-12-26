import { MessageProps } from '../interfaces'

export const languages: MessageProps = {
  'pt-BR': {
    message: 'Teste',
    home: 'Página Inicial',
    copyright: `© Todos os direitos reservados - ${new Date().getFullYear()}`
  },
  'en-US': {
    message: 'Test',
    home: 'Home Page',
    copyright: `© Copyright all rights reserved - ${new Date().getFullYear()}`
  }
}
