import { createElement, ReactElement } from 'react';
import { FaUserAlt, FaMicroblog, FaHome } from 'react-icons/fa';
import { GiUsaFlag, GiBrazilFlag } from 'react-icons/gi';
import { ImBooks } from 'react-icons/im';
const elements = {
  blog: FaMicroblog,
  enUS: GiUsaFlag,
  home: FaHome,
  portfolio: FaUserAlt,
  ptBR: GiBrazilFlag,
  teaching: ImBooks,
};

const Icon = ({ type, ...props }): ReactElement => {
  return createElement(elements[type] || elements.home, props);
};

export default Icon;
