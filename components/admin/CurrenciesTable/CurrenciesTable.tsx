import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { StyledTable } from '../../ui';
import { CurrencyType } from '../../../pages/types';
import { TableSubmitButton } from '../../buttons.styles';
import { trpc } from '../../../utils/trpc';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import TableCurrencyItem from './TableCurrencyItem';

const TableWrapper = styled.section`
  margin: 30px auto 20px;
  width: 90%;
  max-width: 1000px;
`;

interface CurrenciesTableProps {
  currencies: CurrencyType[];
}

const CurrenciesTable: React.FC<CurrenciesTableProps> = ({ currencies }) => {
  const [items, setItems] = useState<CurrencyType[]>(currencies);
  const [clickedCurrencies, setClickedCurrencies] = useState<number[]>([]);
  const deleteCurrency = trpc.deleteCurrency.useMutation();
  const utils = trpc.useContext();

  useEffect(() => {
    // Runs every time when currencies change to keep sortableItems up with currencies
    setItems(currencies);
  }, [currencies]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 15,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(TouchSensor),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Checks if item has been moved far enough
    if (over !== null && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleUpdateClickedCurrencies = (id: number) => {
    // Toggle whether currency has visible actions buttons
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
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
              {items.map((currency) => (
                <TableCurrencyItem
                  key={currency.id}
                  currency={currency}
                  clickedCurrencies={clickedCurrencies}
                  handleUpdateClickedCurrencies={handleUpdateClickedCurrencies}
                  handleDeleteCurrency={handleDeleteCurrency}
                />
              ))}
            </SortableContext>
          </DndContext>
        </tbody>
      </StyledTable>
      <TableSubmitButton disabled={false}>Zapisz</TableSubmitButton>
    </TableWrapper>
  );
};

export default CurrenciesTable;
