import { Decimal } from '@prisma/client/runtime';

export type PriceHistory = { date: string; buy: number; sell: number };

interface CurrencyType {
  id: number;
  name: string;
  image: string;
  fullname: string;
  buy: Decimal;
  sell: Decimal;
  price_history: PriceHistory[];
}

export type CurrencyResponse = {
  data: {
    currencies: CurrencyType[];
  };
};

interface FlagUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  exising: boolean;
  original_filename: string;
}
