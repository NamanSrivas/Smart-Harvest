import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

function GainLossChart({ gainLossData }) {
  if (!gainLossData || !Array.isArray(gainLossData)) {
    return <p className="text-gray-500">No data to show</p>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 my-4 transition">
      <h2 className="text-lg font-bold mb-2">Gain/Loss Overview</h2>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={gainLossData}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="gain" animationDuration={800}>
            {gainLossData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.gain >= 0 ? '#16a34a' : '#dc2626'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GainLossChart;
