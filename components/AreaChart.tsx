import React, { useMemo } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PriceHistory } from '../pages/types';
import { monthsFromatterPL } from '../utils/formatters';

const data = [
  {
    date: '2022-12-02T07:56:48.816Z',
    buy: 3.82,
    sell: 3.9,
  },
  {
    date: '2022-12-03T07:56:48.816Z',
    buy: 3.83,
    sell: 3.91,
  },
  {
    date: '2022-12-04T07:56:48.816Z',
    buy: 3.79,
    sell: 3.81,
  },
  {
    date: '2022-12-05T07:56:48.816Z',
    buy: 3.79,
    sell: 3.81,
  },
  {
    date: '2022-12-06T07:56:48.816Z',
    buy: 3.85,
    sell: 3.87,
  },
  {
    date: '2022-12-07T07:56:48.816Z',
    buy: 3.86,
    sell: 3.88,
  },
  {
    date: '2022-12-08T07:56:48.816Z',
    buy: 3.75,
    sell: 3.82,
  },
];

interface AreaChartProps {
  price_history: PriceHistory[] | undefined;
}

const AreaChartComponent: React.FC<AreaChartProps> = ({ price_history }) => {
  const yAxisRange = useMemo(() => {
    const yAxisRangeValues = data.flatMap(({ buy, sell }) => {
      return [buy, sell];
    });

    const minValue = Math.min(...yAxisRangeValues);
    const maxValue = Math.max(...yAxisRangeValues);

    return [minValue - 0.1, maxValue + 0.1];
  }, []);

  if (!price_history) {
    return <p>Something went wrong</p>;
  }

  return (
    <ResponsiveContainer width="99%" height="99%">
      <LineChart data={data} margin={{ top: 0, right: 50, left: 0, bottom: 0 }}>
        <XAxis
          dataKey="date"
          tickFormatter={(dateString) => {
            const date = new Date(dateString);

            return `${date.getDate()} ${monthsFromatterPL(date.getMonth())}`;
          }}
        />
        <YAxis domain={yAxisRange} />
        <Tooltip
          labelFormatter={(dateString) => {
            const date = new Date(dateString);

            return `${date.getDate()} ${monthsFromatterPL(date.getMonth())}`;
          }}
          formatter={(value: number, name: string) => [
            value,
            name === 'buy' ? 'Kupno' : 'Sprzedaż',
          ]}
        />
        <Legend formatter={(value) => (value === 'buy' ? 'Kupno' : 'Sprzedaż')} />
        <Line type="monotone" dataKey="buy" stroke="#0052b4" />
        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
