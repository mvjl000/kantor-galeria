import React from 'react';
import styled from '@emotion/styled';
import { StyledTable, TableSubmitButton } from '../ui';
import { CurrencyType } from '../../pages/types';
import { FlagWrapper } from '../currencies/Currency/Currency.styles';

const TableWrapper = styled.section`
  margin: 30px auto 20px;
  width: 90%;
  max-width: 1000px;
`;

interface CurrenciesTableProps {
  currencies: CurrencyType[];
}

const CurrenciesTable: React.FC<CurrenciesTableProps> = ({ currencies }) => {
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
          {/* {currencies.map((currency) => (
            <tr key={currency._id}>
              <td className="flag-cell">
                <div>
                  <FlagWrapper>
                    <img
                      alt={`flaga ${currency.name}`}
                      src={`${process.env.UPLOADS_URL}/${currency.image}`}
                    />
                  </FlagWrapper>
                  {currency.name}
                </div>
              </td>
              <td>
                <input defaultValue={currency.buy} />
              </td>
              <td>
                <input defaultValue={currency.sell} />
              </td>
            </tr>
          ))} */}
        </tbody>
      </StyledTable>
      <TableSubmitButton disabled={false}>Zapisz</TableSubmitButton>
    </TableWrapper>
  );
};

export default CurrenciesTable;
