'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import proj4 from 'proj4'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

// Definimi i KRGJSH (Sistemi Koordinativ Shtetëror i Shqipërisë)
const KRGJSH = "+proj=tmerc +lat_0=0 +lon_0=20 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"

export default function Results() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const { data: items } = await supabase.from('inspections').select('*')
      if (items) setData(items)
    }
    fetchItems()
  }, [])

  const exportPDF = () => {
    const doc = new jsPDF()
    doc.text("Raporti i Inspektimeve - KRGJSH", 14, 15)
    
    const tableRows = data.map(item => {
      const [east, north] = proj4("EPSG:4326", KRGJSH, [item.longitude, item.latitude])
      return [item.notes || 'Pa shënime', item.latitude.toFixed(6), item.longitude.toFixed(6), east.toFixed(2), north.toFixed(2)]
    })

    doc.autoTable({
      head: [['Shënime', 'Lat', 'Lng', 'East (m)', 'North (m)']],
      body: tableRows,
      startY: 20
    })
    doc.save('inspektimet_krgjsh.pdf')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Rezultatet e Terrenit</h1>
      <button onClick={exportPDF} style={{ padding: '10px 20px', background: 'green', color: 'white', border: 'none', borderRadius: '5px', marginBottom: '20px' }}>Shkarko Raportin PDF</button>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#eee' }}>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Shënime</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>East (KRGJSH)</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>North (KRGJSH)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const [east, north] = proj4("EPSG:4326", KRGJSH, [item.longitude, item.latitude])
            return (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.notes}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{east.toFixed(2)}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{north.toFixed(2)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}