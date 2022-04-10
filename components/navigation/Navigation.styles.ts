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
    padding: 0;

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
        text-decoration: none;
      }
      span {
        font-family: ${({ theme }) => theme.font.family.josefin};
        font-size: ${({ theme }) => theme.font.size.large};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;

    ul {
      display: flex;

      li {
        margin: 0 20px;
        position: relative;
        .text-split {
          font-size: ${({ theme }) => theme.font.size.large};
          color: ${({ theme }) => theme.colors.black};
          position: relative;
          display: flex;
          flex-direction: column;
          line-height: 1;
          transition: color 0ms 200ms;
        }

        &:hover {
          cursor: pointer;
        }

        &:hover .text-split {
          color: transparent;
          user-select: none;
          transition-delay: 0ms;
        }

        & .text-split::before,
        & .text-split::after {
          position: absolute;
          content: attr(data-text);
          height: calc(0.5em);
          overflow: hidden;
          left: 0;
          right: 0;
          color: ${({ theme }) => theme.font.color.black};
          transition: color 200ms ease-in-out, transform 200ms ease-in-out;
          user-select: none;
        }

        &:hover .text-split::before,
        &:hover .text-split::after {
          color: ${({ theme }) => theme.font.color.black};
          transform: skewX(15deg);
        }

        & .text-split::after {
          bottom: 0;
          display: flex;
          align-items: flex-end;
        }

        &::before {
          content: '';
          position: absolute;
          width: 110%;
          left: -5%;
          top: calc(50% - 2px);
          height: 2px;
          transform: scale(0);
          background-color: ${({ theme }) => theme.font.color.grey};
          border-radius: 20px;
          z-index: 1;
          transition: transform 200ms ease-in-out;
        }

        &:hover::before {
          transform: scale(1);
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
