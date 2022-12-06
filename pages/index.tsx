import type { NextPage } from 'next';
import { useState } from 'react';
import CurrenciesList from '../components/currencies/CurrenciesList/CurrenciesList';
import Currency from '../components/currencies/Currency/Currency';
import AreaChartComponent from '../components/AreaChart';
import { trpc } from '../utils/trpc';
import ReactModal from 'react-modal';
import Modal from '../components/modal/Modal';

ReactModal.setAppElement('#__next');

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currencies = trpc.getCurrencies.useQuery();

  const handleOpenModal = () => {
    document.body.classList.add('no-scroll');
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    document.body.classList.remove('no-scroll');
    setIsModalOpen(false);
  };

  if (!currencies.data?.currencies) {
    return <p>Something went wrong</p>;
  }

  return (
    <CurrenciesList>
      {currencies.data.currencies.map((item, index) => (
        <Currency key={index} data={item} handleOpenModal={handleOpenModal} />
      ))}
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Wykres waluty">
        <AreaChartComponent />
      </Modal>
    </CurrenciesList>
  );
};

export default Home;
