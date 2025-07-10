import React from 'react';

function ResetButton({ resetApp }) {
  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={resetApp}
        className="px-4 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition"
      >
        Reset & Upload New
      </button>
    </div>
  );
}

export default ResetButton;
