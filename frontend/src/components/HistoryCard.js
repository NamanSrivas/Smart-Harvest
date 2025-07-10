import React from 'react';

function HistoryCard({ transactions }) {
  if (!transactions.length) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 my-4 overflow-x-auto">
      <h2 className="text-lg font-bold mb-2">Full CSV Data</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            {Object.keys(transactions[0]).map((key) => (
              <th key={key} className="px-2 py-1 text-left">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => (
            <tr key={idx} className="border-b">
              {Object.values(tx).map((val, i) => (
                <td key={i} className="px-2 py-1">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryCard;
