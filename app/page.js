'use client'
import { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { supabase } from '../lib/supabase'

// Ngarkimi i hartës me dynamic për të shmangur gabimet e SSR në Next.js
const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false })

export default function Home() {
  const [marker, setMarker] = useState({ lat: 41.3275, lng: 19.8187 })
  const [notes, setNotes] = useState('')
  const mapRef = useRef()

  // Funksioni GPS me saktësi të lartë
  const lokalizo = () => {
    if (!navigator.geolocation) return alert("GPS nuk mbështetet!")
    
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords
      setMarker({ lat: latitude, lng: longitude })
      mapRef.current?.flyTo([latitude, longitude], 18)
    }, (err) => alert("Gabim GPS: " + err.message), { enableHighAccuracy: true })
  }

  // Ruajtja në Supabase
  const ruajTeDhenat = async () => {
    const { error } = await supabase.from('inspections').insert([
      { latitude: marker.lat, longitude: marker.lng, notes: notes, created_at: new Date() }
    ])
    if (error) alert("Gabim RLS: Kontrolloni politikat në Supabase!")
    else {
      alert("Pika u ruajt me sukses!")
      setNotes('')
    }
  }

  return (
    <main style={{ position: 'relative', height: '100vh' }}>
      <MapContainer center={[41.3275, 19.8187]} zoom={13} ref={mapRef} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[marker.lat, marker.lng]} />
      </MapContainer>

      {/* Interface-i mbi hartë */}
      <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, background: 'white', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', width: '90%', maxWidth: '400px' }}>
        <input 
          type="text" 
          placeholder="Shënime për inspektimin..." 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <button onClick={ruajTeDhenat} style={{ width: '100%', padding: '10px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Ruaj Inspektimin</button>
      </div>

      <button onClick={lokalizo} style={{ position: 'absolute', bottom: '30px', right: '20px', zIndex: 1000, width: '60px', height: '60px', borderRadius: '50%', background: 'white', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', fontSize: '24px', cursor: 'pointer' }}>📍</button>
    </main>
  )
}