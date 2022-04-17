import styled from '@emotion/styled';
import { flexCenter, flexLeft } from '../../../styles/mixins';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 15px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const CurrencyInfoWrapper = styled.div`
  ${flexLeft}
`;

export const CurrencyPriceWrapper = styled.div`
  ${flexCenter}
  gap: 20px;
  p {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.font.color.black};
    font-weight: 300;
    span {
      font-weight: 500;
    }
  }
`;

export const FlagWrapper = styled.div`
  height: 35px;
  width: 35px;
  background-color: #999;
`;

export const CurrencyName = styled.p`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.font.color.black};
  font-weight: 300;
  span {
    font-weight: 400;
  }
`;

export const CurrencyFullName = styled.p`
  margin-left: 12px;
  font-size: ${({ theme }) => theme.font.size.xSmall};
  color: ${({ theme }) => theme.font.color.grey};
  font-weight: 300;
`;
