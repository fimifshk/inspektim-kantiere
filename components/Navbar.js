'use client'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', // Qëndron në ekran edhe kur lëviz hartën
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 99999, // Vlerë ekstreme për të dalë mbi Leaflet
      display: 'flex',
      gap: '15px',
      backgroundColor: 'white',
      padding: '12px 25px',
      borderRadius: '30px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)', // Hije më e fortë që të dallohet
      border: '2px solid #007bff' // Bordurë blu që të bjerë në sy
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>📍 Harta</Link>
      <Link href="/results" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>📊 Rezultatet</Link>
      <Link href="/login" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>🔑 Login</Link>
    </nav>
  );
'use client'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', // Qëndron në ekran edhe kur lëviz hartën
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 99999, // Vlerë ekstreme për të dalë mbi Leaflet
      display: 'flex',
      gap: '15px',
      backgroundColor: 'white',
      padding: '12px 25px',
      borderRadius: '30px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)', // Hije më e fortë që të dallohet
      border: '2px solid #007bff' // Bordurë blu që të bjerë në sy
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>📍 Harta</Link>
      <Link href="/results" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>📊 Rezultatet</Link>
      <Link href="/login" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>🔑 Login</Link>
    </nav>
  );
}