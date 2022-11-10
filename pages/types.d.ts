import { Decimal } from '@prisma/client/runtime';

interface CurrencyType {
  id: number;
  name: string;
  image: string;
  fullname: string;
  buy: Decimal;
  sell: Decimal;
}

export type CurrencyResponse = {
  data: {
    currencies: CurrencyType[];
  };
};
