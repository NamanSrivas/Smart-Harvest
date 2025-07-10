import React, { useState } from 'react';
import { Sun, Moon, X, Settings } from 'lucide-react';

function SettingsDrawer({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Settings Icon Top Right */}
      <div className="flex justify-end mb-2">
        <button
          onClick={handleDrawer}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow hover:scale-105 transition"
        >
          <Settings size={20} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={handleDrawer}
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-bold">Settings</h2>
          <button
            onClick={handleDrawer}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-4 space-y-4 text-sm">
          {/* Dark/Light Toggle */}
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:scale-110 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Future settings can go here */}
          {/* <div className="flex items-center justify-between">
            <span>Currency</span>
            <select className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              <option>INR</option>
              <option>USD</option>
            </select>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default SettingsDrawer;
