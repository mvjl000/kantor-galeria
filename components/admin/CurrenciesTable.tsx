import React, { useState } from 'react';
import styled from '@emotion/styled';
import { StyledTable } from '../ui';
import { CurrencyType } from '../../pages/types';
import { FlagWrapper } from '../currencies/Currency/Currency.styles';
import { CancelButton, DeleteButton, TableSubmitButton } from '../buttons.styles';
import { trpc } from '../../utils/trpc';

const TableWrapper = styled.section`
  margin: 30px auto 20px;
  width: 90%;
  max-width: 1000px;
`;

interface CurrenciesTableProps {
  currencies: CurrencyType[];
}

const CurrenciesTable: React.FC<CurrenciesTableProps> = ({ currencies }) => {
  const [clickedCurrencies, setClickedCurrencies] = useState<number[]>([]);
  const deleteCurrency = trpc.deleteCurrency.useMutation();
  const utils = trpc.useContext();

  const handleUpdateClickedCurrencies = (id: number) => {
    if (clickedCurrencies.includes(id)) {
      const filteredCurrencies = clickedCurrencies.filter((item) => item !== id);
      setClickedCurrencies(filteredCurrencies);
    } else {
      setClickedCurrencies([...clickedCurrencies, id]);
    }
  };

  const handleDeleteCurrency = async (id: number) => {
    try {
      await deleteCurrency.mutateAsync({ id });
      // Refetch table data
      await utils.getCurrencies.fetch();
    } catch (error) {
      console.log('EEEERRRORRR>>>>>>>>>', error);
    }
  };

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th scope="col">Waluta</th>
            <th scope="col">Kupno</th>
            <th scope="col">Sprzedaż</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency.id}>
              <td className="flag-cell">
                <button type="button" onClick={() => handleUpdateClickedCurrencies(currency.id)}>
                  <FlagWrapper>
                    <img
                      alt={`flaga ${currency.name}`}
                      src={`${process.env.UPLOADS_URL}/${currency.image}`}
                    />
                  </FlagWrapper>
                  {currency.name}
                </button>
              </td>
              {clickedCurrencies.includes(currency.id) ? (
                <td colSpan={2} className="delete-td">
                  <div>
                    <CancelButton
                      type="button"
                      onClick={() => handleUpdateClickedCurrencies(currency.id)}
                    >
                      Anuluj
                    </CancelButton>
                    <DeleteButton type="button" onClick={() => handleDeleteCurrency(currency.id)}>
                      Usuń USD
                    </DeleteButton>
                  </div>
                </td>
              ) : (
                <>
                  <td>
                    {/* @ts-ignore */}
                    <input defaultValue={currency.buy} />
                  </td>
                  <td>
                    {/* @ts-ignore */}
                    <input defaultValue={currency.sell} />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <TableSubmitButton disabled={false}>Zapisz</TableSubmitButton>
    </TableWrapper>
  );
};

export default CurrenciesTable;
