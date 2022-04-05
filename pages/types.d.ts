interface CurrencyType {
  _id: string;
  name: string;
  image: string;
  fullname: string;
  buy: string;
  sell: string;
}

export type CurrencyResponse = {
  data: {
    currencies: CurrencyType[];
  };
};
