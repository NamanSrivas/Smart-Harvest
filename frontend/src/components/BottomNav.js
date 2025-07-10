import React from 'react';
import { BarChart2, Table, Info } from 'lucide-react';

function BottomNav({ filter, setFilter }) {
  const navItems = [
    { label: 'All', value: 'all', icon: <Table size={18} /> },
    { label: 'Short', value: 'short', icon: <BarChart2 size={18} /> },
    { label: 'Long', value: 'long', icon: <Info size={18} /> },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white dark:bg-gray-800 border-t dark:border-gray-700 shadow-inner z-50">
      <div className="flex justify-around px-4 py-2">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={(e) => {
              e.preventDefault(); // ✅ Prevent unwanted propagation
              setFilter(item.value);
            }}
            className={`flex flex-col items-center text-xs p-2 ${
              filter === item.value
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-500 dark:text-gray-300'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BottomNav;
