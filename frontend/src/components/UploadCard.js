import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

function UploadCard({ setTransactions }) {
  const [fileName, setFileName] = useState('');

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const rows = text.split('\n').slice(1);
      const data = rows.map((row) => {
        const [asset, gain, holding] = row.split(',');
        return { asset, gain, holding: holding?.trim() };
      });
      setTransactions(data);
    };
    reader.readAsText(file);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mt-4 text-center border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-400 transition">
      <label className="cursor-pointer block">
        <div className="flex flex-col items-center">
          <UploadCloud className="mb-2 text-blue-500" size={40} />
          <span className="font-medium text-sm text-gray-600 dark:text-gray-300">
            Click or Drag CSV to Upload
          </span>
          {fileName && (
            <span className="text-xs mt-1 text-green-600 dark:text-green-400">
              Uploaded: {fileName}
            </span>
          )}
        </div>
        <input type="file" accept=".csv" onChange={handleFile} className="hidden" />
      </label>
    </div>
  );
}

export default UploadCard;
