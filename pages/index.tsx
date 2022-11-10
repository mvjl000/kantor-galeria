import type { NextPage } from 'next';
import { useState } from 'react';
import CurrenciesList from '../components/currencies/CurrenciesList/CurrenciesList';
import Currency from '../components/currencies/Currency/Currency';
import Modal from 'react-modal';
import { StyledModal } from '../components/modal/Modal.styles';
import AreaChartComponent from '../components/AreaChart';
import { trpc } from '../utils/trpc';

Modal.setAppElement('#__next');

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
      {currencies.data.currencies.map((item) => (
        <Currency key={item.id} data={item} handleOpenModal={handleOpenModal} />
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
