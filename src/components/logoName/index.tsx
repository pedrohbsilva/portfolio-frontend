import Image from 'next/image';
import { ReactElement } from 'react';

import { LogoNameContainer } from './styles';

const LogoName = (): ReactElement => {
  return (
    <LogoNameContainer>
      <Image
        loading="lazy"
        src="/vercel.svg"
        alt="My Image"
        width={50}
        height={50}
      />
      <p>
        Pedro
        <span>Henrique</span>
      </p>
    </LogoNameContainer>
  );
};

export default LogoName;
