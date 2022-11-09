import type { NextPage } from 'next';
import { H1 } from '../components/ui';
import CurrenciesTable from '../components/admin/CurrenciesTable';
import CurrencyForm from '../components/admin/CurrencyForm/CurrencyForm';
import Options from '../components/admin/Options/Options';
import { trpc } from '../utils/trpc';

const Admin: NextPage = () => {
  const currencies = trpc.getCurrencies.useQuery();

  if (!currencies.data?.currencies) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <H1>Panel Administratora</H1>
      <CurrenciesTable currencies={currencies.data.currencies} />
      <CurrencyForm />
      <Options />
    </>
  );
};

export default Admin;
