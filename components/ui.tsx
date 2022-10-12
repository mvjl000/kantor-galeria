import styled from '@emotion/styled';
import { flexCenter, flexColumnCenter } from '../styles/mixins';

export const H1 = styled.h1`
  margin-top: 40px;
  padding: 0 20px;
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xLarge};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.huge};
  }
`;

export const InputWrapper = styled.div`
  ${flexColumnCenter};
  align-items: flex-start;
  width: 100%;

  label {
    font-size: ${({ theme }) => theme.font.size.xSmall};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  padding: 0 5px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.font.size.xSmall};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;

export const SubmitButtonWrapper = styled.div`
  ${flexCenter};
  width: 100%;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  height: 40px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.font.size.xSmall};
  cursor: pointer;
  transition: box-shadow 0.1s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.colors.black};
    outline: none;
  }
`;
