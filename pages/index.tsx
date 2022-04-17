import type { GetServerSideProps, NextPage, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrenciesList from '../components/currencies/CurrenciesList/CurrenciesList';
import Currency from '../components/currencies/Currency/Currency';
import { CurrencyType } from './types';
import { toast } from 'react-toastify';

export const getServerSideProps: GetServerSideProps = async () => {
  let fetchedCurrencies: CurrencyType[] = [];
  try {
    const responseData = await axios.get(`${process.env.API_URL}/currency`);
    fetchedCurrencies = responseData.data.currencies;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      currencies: fetchedCurrencies,
    },
  };
};

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ currencies }) => {
  return (
    <CurrenciesList>
      {currencies.map((item: CurrencyType) => (
        <Currency key={item._id} data={item} />
      ))}
    </CurrenciesList>
  );
};

export default Home;
