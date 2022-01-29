import React, { createElement } from 'react';
import { FaUserAlt, FaMicroblog, FaHome } from 'react-icons/fa';
import { GiHamburgerMenu, GiUsaFlag, GiBrazilFlag } from 'react-icons/gi';

const elements = {
  blog: FaMicroblog,
  enUS: GiUsaFlag,
  home: FaHome,
  portfolio: FaUserAlt,
  ptBR: GiBrazilFlag,
  teaching: GiHamburgerMenu,
};

const Icon = ({ type, ...props }): React.ReactElement => {
  return createElement(elements[type] || elements.home, props);
};

export default Icon;
