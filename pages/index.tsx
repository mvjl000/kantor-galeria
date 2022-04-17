import type { GetServerSideProps, NextPage, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';
import axios from 'axios';
import CurrenciesList from '../components/currencies/CurrenciesList/CurrenciesList';
import Currency from '../components/currencies/Currency/Currency';
import { CurrencyType } from './types';
import Modal from 'react-modal';
import { StyledModal } from '../components/modal/Modal.styles';
import AreaChartComponent from '../components/AreaChart';

Modal.setAppElement('#__next');

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CurrenciesList>
      {currencies.map((item: CurrencyType) => (
        <Currency key={item._id} data={item} handleOpenModal={handleOpenModal} />
      ))}
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
