import React, { useEffect, useState } from 'react';
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
import { StyledTable, TableLoader, TableWrapper } from './CurrenciesTable.styles';
import { Loader } from '../../ui';

interface CurrenciesTableProps {
  currencies: CurrencyType[];
}

const CurrenciesTable: React.FC<CurrenciesTableProps> = ({ currencies }) => {
  const [items, setItems] = useState<CurrencyType[]>(currencies);
  const [isLoading, setIsLoading] = useState(false);

  const deleteCurrency = trpc.deleteCurrency.useMutation();
  const reindexCurrencies = trpc.reindexCurrencies.useMutation();
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

  const handleReindex = async (currencies: CurrencyType[]) => {
    const formattedCurrencies = currencies.map((item) => {
      return {
        ...item,
        buy: Number(item.buy),
        sell: Number(item.sell),
      };
    });

    setIsLoading(true);

    await reindexCurrencies.mutateAsync({ currencies: formattedCurrencies });

    setIsLoading(false);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Checks if the item has been moved far enough
    if (over !== null && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const movedArray = arrayMove(items, oldIndex, newIndex);
        handleReindex(movedArray);

        return movedArray;
      });
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
      {isLoading && (
        <TableLoader>
          <Loader />
        </TableLoader>
      )}
      <StyledTable>
        <thead>
          <tr>
            <th scope="col">Waluta</th>
            <th scope="col">Kupno</th>
            <th scope="col">Sprzedaż</th>
            <th scope="col" aria-label="Akcje">
              <span className="visually-hidden">Akcje</span>
            </th>
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
                  handleDeleteCurrency={handleDeleteCurrency}
                />
              ))}
            </SortableContext>
          </DndContext>
        </tbody>
      </StyledTable>
      <TableSubmitButton disabled={false} aria-label="Zapisz">
        Zapisz
      </TableSubmitButton>
    </TableWrapper>
  );
};

export default CurrenciesTable;
