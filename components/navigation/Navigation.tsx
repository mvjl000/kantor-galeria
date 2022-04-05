import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wrapper, BurgerButton, LogoWrapper } from './Navigation.styles';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideMenu = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <LogoWrapper>
        <Link href="/" passHref={true}>
          <a>
            <Image src="/images/kantor_logo_black.png" alt="Logo kantoru" width={243} height={64} />
          </a>
        </Link>
      </LogoWrapper>
      <BurgerButton onClick={toggleSideMenu}>
        <div />
        <div />
        <div />
      </BurgerButton>
    </Wrapper>
  );
};

export default Navigation;
