import { FC } from 'react';
import { Wrapper } from './CurrenciesList.styles';

const CurrenciesList: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CurrenciesList;
