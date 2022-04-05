import styled from '@emotion/styled';
import { flexBetween } from '../../styles/mixins';

export const Wrapper = styled.nav`
  ${flexBetween};
  margin: 25px;
  img {
    width: 200px;
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

export const BurgerButton = styled.button`
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
    background: ${({ theme }) => theme.colors.black};
    position: relative;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;
