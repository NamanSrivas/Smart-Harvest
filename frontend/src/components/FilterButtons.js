import React from 'react';

function FilterButtons({ filter, setFilter }) {
  const buttons = ["All", "Short-Term", "Long-Term"];

  return (
    <div className="flex justify-around mb-4">
      {buttons.map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-2 rounded-xl text-sm font-medium shadow ${
            filter === type
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
