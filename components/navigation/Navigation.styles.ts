import styled from '@emotion/styled';
import { flexBetween, flexColumnCenter } from '../../styles/mixins';

interface SideMenuProps {
  isOpen: boolean;
}

export const OuterWrapper = styled.div`
  ${flexBetween};
  padding: 25px;
  width: 100%;
`;

export const Wrapper = styled.div<SideMenuProps>`
  ${flexColumnCenter}
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 50px;

  div.mobileNavLogo {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.mq.desktop} {
    position: static;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: unset;
    background-color: transparent;
    padding: 25px 45px;

    div.mobileNavLogo {
      display: none;
    }
  }
`;

export const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;
    li {
      margin: 50px 0;
      a {
        font-family: ${({ theme }) => theme.font.family.josefin};
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        font-size: ${({ theme }) => theme.font.size.large};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;

    ul {
      display: flex;

      li {
        margin: 0 20px;
        a {
          color: ${({ theme }) => theme.colors.black};
          transition: 0.15s;
          &:hover {
            color: #999;
          }
        }
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 200px;
  img {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 243px;
  }
`;

export const BurgerButton = styled.button<SideMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 3.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  div {
    width: 4rem;
    height: 0.3rem;
    background-color: ${({ theme, isOpen }) => (isOpen ? theme.colors.white : theme.colors.black)};
    position: relative;
  }
  div:nth-child(1),
  div:nth-child(2) {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;
