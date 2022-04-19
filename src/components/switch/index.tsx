import { ReactElement } from 'react';

import { useApp } from '../../hooks/index';
import { Icon, Li } from './styles';

const Switch = (): ReactElement => {
  const { theme, toggleTheme } = useApp();
  const isLight = theme === 'light';

  return (
    <Li onClick={toggleTheme} lightTheme={isLight}>
      <Icon lightTheme={!isLight} />
    </Li>
  );
};

export default Switch;
