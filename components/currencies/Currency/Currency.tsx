import { FC } from 'react';
import { CurrencyType } from '../../../pages/types';
import {
  FlagWrapper,
  Wrapper,
  CurrencyName,
  CurrencyFullName,
  CurrencyInfoWrapper,
  CurrencyPriceWrapper,
} from './Currency.styles';

interface CurrencyProps {
  data: CurrencyType;
}

const Currency: FC<CurrencyProps> = ({ data }) => {
  return (
    <Wrapper>
      <CurrencyInfoWrapper>
        <FlagWrapper>
          <img alt={`flaga ${data.name}`} src={`${process.env.UPLOADS_URL}/${data.image}`} />
        </FlagWrapper>
        <CurrencyName>
          <span>{data.name} / </span>PLN
        </CurrencyName>
        <CurrencyFullName>{data.fullname}</CurrencyFullName>
      </CurrencyInfoWrapper>
      <CurrencyPriceWrapper>
        <p>
          Kupno: <span>{data.buy}</span>
        </p>
        <p>
          Sprzedaż: <span>{data.sell}</span>
        </p>
      </CurrencyPriceWrapper>
    </Wrapper>
  );
};

export default Currency;
