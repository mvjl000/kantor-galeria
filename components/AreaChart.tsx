import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PriceHistory } from '../pages/types';
import { monthsFromatterPL } from '../utils/formatters';

const data = [
  {
    date: '31 MAR',
    buy: 3.82,
    sell: 3.9,
  },
  {
    date: '1 KWI',
    buy: 3.86,
    sell: 4,
  },
  {
    date: '2 KWI',
    buy: 3.82,
    sell: 3.9,
  },
  {
    date: '3 KWI',
    buy: 3.71,
    sell: 3.74,
  },
  {
    date: '4 KWI',
    buy: 4.21,
    sell: 4.32,
  },
  {
    date: '5 KWI',
    buy: 3.82,
    sell: 3.9,
  },
  {
    date: '6 KWI',
    buy: 3.87,
    sell: 3.92,
  },
];

interface AreaChartProps {
  price_history: PriceHistory[] | undefined;
}

const AreaChartComponent: React.FC<AreaChartProps> = ({ price_history }) => {
  if (!price_history) {
    return <p>Something went wrong</p>;
  }

  return (
    <ResponsiveContainer width="99%" height="99%">
      <LineChart data={price_history} margin={{ top: 0, right: 50, left: 0, bottom: 0 }}>
        <XAxis
          dataKey="date"
          tickFormatter={(dateString) => {
            const date = new Date(dateString);

            return `${date.getDate()} ${monthsFromatterPL(date.getMonth())}`;
          }}
        />
        <YAxis domain={[3.5, 4.5]} />
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
