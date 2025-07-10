import React, { useState } from 'react';
import UploadCard from './components/UploadCard';
import GainLossChart from './components/GainLossChart';
import TransactionTable from './components/TransactionTable';
import TaxCalculator from './components/TaxCalculator';
import SettingsDrawer from './components/SettingsDrawer';
import BottomNav from './components/BottomNav';
import ExportPDFButton from './components/ExportPDFButton';
import ResetButton from './components/ResetButton';
import SampleCSVButton from './components/SampleCSVButton';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);
  const [uploadKey, setUploadKey] = useState(Date.now()); // 👈 new key for UploadCard reset

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const resetApp = () => {
    setTransactions([]);
    setFilter('all');
    setUploadKey(Date.now()); // 👈 force re-render UploadCard
  };

  // Filter transactions based on holding type
  const filteredTransactions = transactions.filter((tx) => {
    if (filter === 'all') return true;
    return tx.holding === filter;
  });

  // Prepare chart data safely
  const gainLossData = Array.isArray(filteredTransactions)
    ? filteredTransactions
        .filter((tx) => tx.asset && !isNaN(parseFloat(tx.gain)))
        .map((tx) => ({
          label: tx.asset,
          gain: parseFloat(tx.gain),
        }))
    : [];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <main className="max-w-md mx-auto px-4 pb-24 pt-2">

          {/* ⚙️ Settings Drawer */}
          <SettingsDrawer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* 📤 Upload CSV */}
          <UploadCard key={uploadKey} setTransactions={setTransactions} />

          {/* 📥 Sample CSV Download Button */}
          <SampleCSVButton />

          {/* Show these only after transactions are uploaded */}
          {transactions.length > 0 && (
            <>
              <div id="export-section">
                {/* 📊 Gain/Loss Chart */}
                <GainLossChart gainLossData={gainLossData} />

                {/* 🔄 Reset */}
                <ResetButton resetApp={resetApp} />

                {/* 📋 Transaction Table */}
                <TransactionTable transactions={filteredTransactions} filter={filter} />

                {/* 🧮 Tax Calculator */}
                <TaxCalculator transactions={filteredTransactions} />
              </div>

              {/* 📄 Export PDF Button */}
              <ExportPDFButton />
            </>
          )}
        </main>

        {/* 🔻 Bottom Navigation */}
        <BottomNav filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
}

export default App;
