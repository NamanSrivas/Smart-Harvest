import React from 'react';
import { Download } from 'lucide-react';

function SampleCSVButton() {
  return (
    <div className="mt-4 flex justify-center">
      <a
        href="/sample.csv"
        download
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        <Download className="mr-2" size={18} />
        Download Sample CSV
      </a>
    </div>
  );
}

export default SampleCSVButton;
