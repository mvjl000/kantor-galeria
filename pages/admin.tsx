import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { H1 } from '../components/ui';
import axios from 'axios';
import CurrenciesTable from '../components/admin/CurrenciesTable';
import CurrencyForm from '../components/admin/CurrencyForm/CurrencyForm';
import Options from '../components/admin/Options/Options';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
    try {
      const responseData = await axios.get(`${process.env.API_URL}/currency`);
      return {
        props: {
          currencies: responseData.data.currencies,
          error: false,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          currencies: [],
          error: true,
        },
      };
    }
  },
});

const Admin: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  currencies,
  error,
}) => {
  if (error) {
    return <H1>Coś poszło nie tak, spróbuj ponownie później</H1>;
  }
  return (
    <>
      <H1>Panel Administratora</H1>
      <CurrenciesTable currencies={currencies} />
      <CurrencyForm />
      <Options />
    </>
  );
};

export default Admin;
