import styled from '@emotion/styled';
import { flexBetween, flexColumnBetween, flexColumnCenter } from '../../styles/mixins';

interface SideMenuProps {
  isOpen: boolean;
}

export const OuterWrapper = styled.div`
  /* ${flexBetween};
  margin: 25px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: absolute;
  img {
    width: 200px;
  }
`;

export const Wrapper = styled.div<SideMenuProps>`
  /* ${flexColumnCenter}
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.mq.desktop} {
    ${flexColumnBetween}
    margin-left: auto;
    height: unset;
    width: unset;
    background-color: transparent;
  } */
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 50px;

  ${({ theme }) => theme.mq.desktop} {
    position: static;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: unset;
    background-color: transparent;
    padding: 25px 45px;
  }
`;

export const StyledNavigation = styled.nav`
  /* ul {
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
  } */
  ul {
    list-style: none;
    padding: 0;
    text-align: center;
    li {
      margin: 50px 0;
      a {
        font-family: ${({ theme }) => theme.font.family.josefin};
        color: black;
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
