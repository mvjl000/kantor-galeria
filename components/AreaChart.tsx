import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

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

const AreaChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <LineChart data={data} margin={{ top: 0, right: 50, left: 0, bottom: 0 }}>
        <XAxis dataKey="date" />
        <YAxis domain={[3.5, 4.5]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="buy" stroke="#0052b4" />
        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
