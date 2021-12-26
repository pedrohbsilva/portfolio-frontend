import { MessageProps } from '../interfaces'

export const languages: MessageProps = {
  'pt-BR': {
    message: 'Teste',
    home: 'Página Inicial',
    copyright: `© Todos os direitos reservados - ${new Date().getFullYear()}`,
    aboutMe: 'Trabalho com desenvolvimento de software, com experiência em Frontend e Backend, sendo atualmente exerço a função de Analista de Tecnologia na Infosys e Professor de Tecnologia no curso DEVinHouse do SENAI/SC, focado em ensino de Javascript, NodeJS, ReactJS. Tenho experiência de 3 anos na área de tecnologia com grande capacidade de resolução de problemas e focado em algoritmos.',
    hello: 'Olá! Eu sou o Pedro'
  },
  'en-US': {
    message: 'Test',
    home: 'Home Page',
    copyright: `© Copyright all rights reserved - ${new Date().getFullYear()}`,
    aboutMe: 'I work with software development, with experience in Frontend and Backend, currently working as a Technology Analyst at Infosys and Professor of Technology in the DEVinHouse course at SENAI / SC, focused on teaching Javascript, NodeJS, ReactJS. I have 3 years experience in the technology area with great problem solving skills and focused on algorithms.',
    hello: 'Hello! I am Pedro'
  }
}
