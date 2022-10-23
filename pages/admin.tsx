import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Link from 'next/link';
import { H1 } from '../components/ui';
import axios from 'axios';
import CurrenciesTable from '../components/admin/CurrenciesTable';
import CurrencyForm from '../components/admin/CurrencyForm/CurrencyForm';

export const getServerSideProps: GetServerSideProps = async () => {
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
};

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
      <Link href="/api/auth/logout" passHref={false}>
        <a
          style={{
            display: 'block',
            margin: '50px auto',
            width: '80px',
            height: '30px',
            fontSize: '22px',
            backgroundColor: '#ccc',
            textAlign: 'center',
          }}
        >
          logout
        </a>
      </Link>
    </>
  );
};

export default Admin;
