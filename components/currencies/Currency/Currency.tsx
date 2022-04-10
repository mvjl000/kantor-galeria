import { FC } from 'react';
import { CurrencyType } from '../../../pages/types';
import { FlagWrapper, Wrapper } from './Currency.styles';

interface CurrencyProps {
  data: CurrencyType;
}

const Currency: FC<CurrencyProps> = ({ data }) => {
  return (
    <Wrapper>
      <FlagWrapper></FlagWrapper>
    </Wrapper>
  );
};

export default Currency;
