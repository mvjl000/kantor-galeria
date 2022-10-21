import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import CurrenciesList from '../components/currencies/CurrenciesList/CurrenciesList';
import Currency from '../components/currencies/Currency/Currency';
import { CurrencyType } from './types';
import Modal from 'react-modal';
import { StyledModal } from '../components/modal/Modal.styles';
import AreaChartComponent from '../components/AreaChart';
import { trpc } from '../utils/trpc';

Modal.setAppElement('#__next');

export const getStaticProps: GetStaticProps = async () => {
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
    revalidate: 1000 * 60 * 10,
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ currencies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError } = trpc.hello.useQuery({ text: 'client' });

  const handleOpenModal = () => {
    document.body.classList.add('no-scroll');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    document.body.classList.remove('no-scroll');
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}>Loading</div>;
  }

  return (
    <CurrenciesList>
      {/* {currencies.map((item: CurrencyType) => (
        <Currency key={item._id} data={item} handleOpenModal={handleOpenModal} />
      ))} */}
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
      >
        <AreaChartComponent />
      </StyledModal>
    </CurrenciesList>
  );
};

export default Home;
