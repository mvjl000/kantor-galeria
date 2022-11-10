import React from 'react';
import { CurrencyType } from '../../../pages/types';
import { CancelButton, DeleteButton } from '../../buttons.styles';
import { FlagWrapper } from '../../currencies/Currency/Currency.styles';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TableCurrencyItemProps {
  currency: CurrencyType;
  clickedCurrencies: number[];
  handleUpdateClickedCurrencies: (id: number) => void;
  handleDeleteCurrency: (id: number) => void;
}

const TableCurrencyItem: React.FC<TableCurrencyItemProps> = ({
  currency,
  clickedCurrencies,
  handleUpdateClickedCurrencies,
  handleDeleteCurrency,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: currency.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr ref={setNodeRef} style={style} {...attributes} {...listeners}>
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
            <CancelButton type="button" onClick={() => handleUpdateClickedCurrencies(currency.id)}>
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
  );
};

export default TableCurrencyItem;
