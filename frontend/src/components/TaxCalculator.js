import React, { useState } from 'react';

function TaxCalculator({ transactions }) {
  const [mode, setMode] = useState('auto'); // 'auto' or 'custom'
  const [customShortRate, setCustomShortRate] = useState(15);
  const [customLongRate, setCustomLongRate] = useState(10);
  const [calculatedTax, setCalculatedTax] = useState(null);

  let shortGain = 0, longGain = 0;

  transactions.forEach(tx => {
    const gain = parseFloat(tx.gain || 0);
    if (gain > 0) {
      tx.holding === "short" ? shortGain += gain : longGain += gain;
    }
  });

  const autoTax = (shortGain * 0.15) + (longGain * 0.10);

  const handleCalculate = () => {
    const shortTax = shortGain * (customShortRate / 100);
    const longTax = longGain * (customLongRate / 100);
    setCalculatedTax(shortTax + longTax);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 my-4">
      <h2 className="text-lg font-bold mb-4 text-center">Tax Estimation</h2>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-4">
        {['auto', 'custom'].map((opt) => (
          <button
            key={opt}
            onClick={() => setMode(opt)}
            className={`px-4 py-2 mx-1 rounded-xl text-sm font-semibold transition ${
              mode === opt
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            {opt === 'auto' ? 'Auto Tax' : 'Custom Tax'}
          </button>
        ))}
      </div>

      {/* Auto Tax View */}
      {mode === 'auto' && (
        <div className="space-y-2 text-sm">
          <p>Short-Term Gain: ₹{shortGain.toFixed(2)} × 15%</p>
          <p>Long-Term Gain: ₹{longGain.toFixed(2)} × 10%</p>
          <hr className="my-2 border-gray-400 dark:border-gray-600" />
          <p className="font-semibold text-base">
            Estimated Tax: ₹{autoTax.toFixed(2)}
          </p>
        </div>
      )}

      {/* Custom Tax View */}
      {mode === 'custom' && (
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <label className="w-1/2">Short-Term Tax Rate (%)</label>
            <input
              type="number"
              value={customShortRate}
              onChange={(e) => setCustomShortRate(e.target.value)}
              className="w-1/2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-right"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="w-1/2">Long-Term Tax Rate (%)</label>
            <input
              type="number"
              value={customLongRate}
              onChange={(e) => setCustomLongRate(e.target.value)}
              className="w-1/2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-right"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl"
          >
            Calculate Tax
          </button>

          {calculatedTax !== null && (
            <p className="text-base font-semibold text-center">
              Estimated Tax: ₹{calculatedTax.toFixed(2)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TaxCalculator;
