import React from 'react';
import { FileDown } from 'lucide-react';

function ExportPDFButton() {
  const generatePDF = () => {
    const element = document.getElementById('export-section');
    if (!element) return;

    import('html2pdf.js').then((module) => {
      const html2pdf = module.default; // ✅ FIXED: use .default
      const opt = {
        margin: 0.3,
        filename: 'SmartHarvest_Report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      html2pdf().set(opt).from(element).save();
    });
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <button
        onClick={generatePDF}
        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
      >
        <FileDown className="mr-2" size={18} />
        Export PDF
      </button>
    </div>
  );
}

export default ExportPDFButton;
