<<<<<<< HEAD
'use client'
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import proj4 from 'proj4';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const KRGJSH = "+proj=tmerc +lat_0=0 +lon_0=20 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs";

export default function Results() {
  const [data, setData] = useState([]);

  useEffect(() => { fetchInspections(); }, []);

  async function fetchInspections() {
    const { data: res, error } = await supabase.from('inspections').select('*').order('created_at', { ascending: false });
    if (!error) {
      const transformed = res.map(item => {
        const [east, north] = proj4("EPSG:4326", KRGJSH, [item.lng, item.lat]);
        return { ...item, north, east };
      });
      setData(transformed);
    }
  }

  // FUNKSIONI PËR EXCEL
  const exportToExcel = () => {
    const excelData = data.map(item => ({
      Projekti: item.project_name,
      Email: item.email,
      Statusi: item.status,
      "Lat (WGS84)": item.lat,
      "Lon (WGS84)": item.lng,
      "North (KRGJSH)": item.north?.toFixed(3),
      "East (KRGJSH)": item.east?.toFixed(3),
      Data: new Date(item.created_at).toLocaleString()
    }));
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inspektimet");
    XLSX.writeFile(wb, "Raporti_Kantiereve.xlsx");
  };

  // FUNKSIONI PËR PDF (RAPORT TEKNIK)
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("RAPORT TEKNIK I INSPEKTIMEVE", 14, 22);
    doc.setFontSize(10);
    doc.text(`Gjeneruar më: ${new Date().toLocaleString()}`, 14, 30);

    const tableRows = data.map(item => [
      item.project_name,
      `${item.lat?.toFixed(5)}, ${item.lng?.toFixed(5)}`,
      item.north?.toFixed(3),
      item.east?.toFixed(3),
      item.status
    ]);

    doc.autoTable({
      startY: 35,
      head: [['Projekti', 'WGS84', 'North (m)', 'East (m)', 'Statusi']],
      body: tableRows,
      theme: 'grid',
      headStyles: { fillColor: [0, 123, 255] }
    });

    doc.save("Raporti_Teknik.pdf");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>📋 Regjistri i të Dhënave Gjeodezike</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={exportToExcel} style={btnExcel}>📗 Excel</button>
          <button onClick={exportToPDF} style={btnPdf}>📕 PDF Report</button>
          <button onClick={() => window.location.href='/'} style={btnBack}>🏠 Harta</button>
        </div>
      </div>

      <div style={tableWrapper}>
        <table style={tableS}>
          <thead>
            <tr style={{ backgroundColor: '#f1f3f5' }}>
              <th style={thS}>Projekti</th>
              <th style={thS}>Veri (N)</th>
              <th style={thS}>Lindje (E)</th>
              <th style={thS}>Statusi</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdS}>{item.project_name}</td>
                <td style={tdS}><strong>{item.north?.toFixed(3)}</strong></td>
                <td style={tdS}><strong>{item.east?.toFixed(3)}</strong></td>
                <td style={tdS}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const btnExcel = { padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
const btnPdf = { padding: '10px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
const btnBack = { padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
const tableWrapper = { boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden' };
const tableS = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' };
const thS = { padding: '15px', textAlign: 'left', borderBottom: '2px solid #dee2e6' };
=======
'use client'
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import proj4 from 'proj4';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const KRGJSH = "+proj=tmerc +lat_0=0 +lon_0=20 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs";

export default function Results() {
  const [data, setData] = useState([]);

  useEffect(() => { fetchInspections(); }, []);

  async function fetchInspections() {
    const { data: res, error } = await supabase.from('inspections').select('*').order('created_at', { ascending: false });
    if (!error) {
      const transformed = res.map(item => {
        const [east, north] = proj4("EPSG:4326", KRGJSH, [item.lng, item.lat]);
        return { ...item, north, east };
      });
      setData(transformed);
    }
  }

  // FUNKSIONI PËR EXCEL
  const exportToExcel = () => {
    const excelData = data.map(item => ({
      Projekti: item.project_name,
      Email: item.email,
      Statusi: item.status,
      "Lat (WGS84)": item.lat,
      "Lon (WGS84)": item.lng,
      "North (KRGJSH)": item.north?.toFixed(3),
      "East (KRGJSH)": item.east?.toFixed(3),
      Data: new Date(item.created_at).toLocaleString()
    }));
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inspektimet");
    XLSX.writeFile(wb, "Raporti_Kantiereve.xlsx");
  };

  // FUNKSIONI PËR PDF (RAPORT TEKNIK)
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("RAPORT TEKNIK I INSPEKTIMEVE", 14, 22);
    doc.setFontSize(10);
    doc.text(`Gjeneruar më: ${new Date().toLocaleString()}`, 14, 30);

    const tableRows = data.map(item => [
      item.project_name,
      `${item.lat?.toFixed(5)}, ${item.lng?.toFixed(5)}`,
      item.north?.toFixed(3),
      item.east?.toFixed(3),
      item.status
    ]);

    doc.autoTable({
      startY: 35,
      head: [['Projekti', 'WGS84', 'North (m)', 'East (m)', 'Statusi']],
      body: tableRows,
      theme: 'grid',
      headStyles: { fillColor: [0, 123, 255] }
    });

    doc.save("Raporti_Teknik.pdf");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>📋 Regjistri i të Dhënave Gjeodezike</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={exportToExcel} style={btnExcel}>📗 Excel</button>
          <button onClick={exportToPDF} style={btnPdf}>📕 PDF Report</button>
          <button onClick={() => window.location.href='/'} style={btnBack}>🏠 Harta</button>
        </div>
      </div>

      <div style={tableWrapper}>
        <table style={tableS}>
          <thead>
            <tr style={{ backgroundColor: '#f1f3f5' }}>
              <th style={thS}>Projekti</th>
              <th style={thS}>Veri (N)</th>
              <th style={thS}>Lindje (E)</th>
              <th style={thS}>Statusi</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdS}>{item.project_name}</td>
                <td style={tdS}><strong>{item.north?.toFixed(3)}</strong></td>
                <td style={tdS}><strong>{item.east?.toFixed(3)}</strong></td>
                <td style={tdS}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const btnExcel = { padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
const btnPdf = { padding: '10px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
const btnBack = { padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };
const tableWrapper = { boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden' };
const tableS = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' };
const thS = { padding: '15px', textAlign: 'left', borderBottom: '2px solid #dee2e6' };
>>>>>>> a5f1ea22 (instalo librarite e reja)
const tdS = { padding: '12px' };