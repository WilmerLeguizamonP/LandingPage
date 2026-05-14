'use client';

import * as XLSX from 'xlsx';
import { Download } from 'lucide-react';

interface ExportButtonProps {
  data: any[];
}

const ExportButton = ({ data }: ExportButtonProps) => {
  const exportToExcel = () => {
    // Transform data for Excel
    const worksheetData = data.map(lead => ({
      'Fecha': new Date(lead.fecha).toLocaleDateString(),
      'Hora': new Date(lead.fecha).toLocaleTimeString(),
      'Nombre': lead.nombre,
      'Correo': lead.correo,
      'Teléfono': lead.telefono,
      'Empresa': lead.empresa || 'N/A',
      'Tipo': lead.tipo,
      'Mensaje': lead.mensaje || 'N/A',
      'Proyecto Interés': lead.proyecto || 'N/A',
      'Origen': lead.origen,
      'Estado': lead.estado
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Prospectos');

    // Generate and download
    XLSX.writeFile(workbook, `Prospectos_3G_Ingenieria_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <button 
      onClick={exportToExcel}
      className="bg-green-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center shadow-lg shadow-green-200 hover:bg-green-700 transition-all"
    >
      <Download size={18} className="mr-2" />
      Exportar a Excel
    </button>
  );
};

export default ExportButton;
