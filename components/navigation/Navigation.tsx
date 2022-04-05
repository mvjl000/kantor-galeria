import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BurgerButton,
  LogoWrapper,
  OuterWrapper,
  Wrapper,
  StyledNavigation,
} from './Navigation.styles';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideMenu = () => setIsOpen(!isOpen);

  return (
    <OuterWrapper>
      <LogoWrapper>
        <Link href="/" passHref={true}>
          <a>
            <Image src="/images/kantor_logo_black.png" alt="Logo kantoru" width={243} height={64} />
          </a>
        </Link>
      </LogoWrapper>
      <BurgerButton onClick={toggleSideMenu} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </BurgerButton>
      <Wrapper isOpen={isOpen}>
        <StyledNavigation>
          <ul>
            <li>
              <Link href="/">KURSY WALUT</Link>
            </li>
            <li>
              <Link href="/kontakt">KONTAKT</Link>
            </li>
          </ul>
        </StyledNavigation>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
