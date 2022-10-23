import styled from '@emotion/styled';
import { flexCenter } from '../styles/mixins';

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

export const H2 = styled.h2`
  margin-top: 40px;
  padding: 0 20px;
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.large};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xLarge};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 92px;
  width: 100%;

  label {
    font-size: ${({ theme }) => theme.font.size.xSmall};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }

  p {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.font.size.xSmall};
    color: red;
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
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.size.xSmall};
  cursor: pointer;
  transition: box-shadow 0.1s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.colors.black};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    box-shadow: none;
    cursor: default;
  }
`;

export const TableSubmitButton = styled.button`
  height: 48px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.xSmall};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  cursor: pointer;

  /* alignment */
  margin-top: 20px;
  position: sticky;
  bottom: 28px;
  float: right;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:disabled {
    display: none;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  border-collapse: collapse;

  thead tr th {
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-align: center;
    padding: 10px 0;
  }

  tbody {
    border-top: 1px solid black;
  }

  tbody tr td {
    height: 50px;
    font-size: ${({ theme }) => theme.font.size.xSmall};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-align: center;
    border: 1px solid black;

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }

  tbody tr td.flag-cell > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    gap: 10px;
  }

  tbody tr td input {
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.xSmall};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }
`;
