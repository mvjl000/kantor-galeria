import type { NextPage } from 'next';
import { useState } from 'react';
import CurrenciesList from '../components/currencies/CurrenciesList/CurrenciesList';
import Currency from '../components/currencies/Currency/Currency';
import AreaChartComponent from '../components/AreaChart';
import { trpc } from '../utils/trpc';
import ReactModal from 'react-modal';
import Modal from '../components/modal/Modal';
import { CurrencyType } from './types';

ReactModal.setAppElement('#__next');

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCurrency, setClickedCurrency] = useState<CurrencyType | undefined>(undefined);

  const currencies = trpc.getCurrencies.useQuery();

  const handleOpenModal = (currency: CurrencyType) => {
    document.body.classList.add('no-scroll');
    setIsModalOpen(true);
    setClickedCurrency(currency);
  };
  const handleCloseModal = () => {
    document.body.classList.remove('no-scroll');
    setIsModalOpen(false);
    setClickedCurrency(undefined);
  };

  if (!currencies.data?.currencies) {
    return <p>Something went wrong</p>;
  }

  return (
    <CurrenciesList>
      {currencies.data.currencies.map((item, index) => (
        // @ts-ignore
        <Currency key={index} data={item} handleCurrencyClick={handleOpenModal} />
      ))}
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Wykres waluty">
        <AreaChartComponent price_history={clickedCurrency?.price_history} />
      </Modal>
    </CurrenciesList>
  );
};

export default Home;
