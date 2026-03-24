<<<<<<< HEAD
'use client'
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MapContainer, TileLayer, Marker, LayersControl, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapEvents({ setClickedPos }) {
  useMapEvents({
    click(e) { setClickedPos(e.latlng); },
  });
  return null;
}

export default function Map() {
  const [mounted, setMounted] = useState(false);
  const [clickedPos, setClickedPos] = useState(null);
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState('Në proces'); // Statusi default
  const [photoLinks, setPhotoLinks] = useState([]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleSave = async () => {
    if (!clickedPos || !email) return alert("Plotësoni Email-in dhe zgjidhni pikën!");
    setIsSending(true);

    const { error } = await supabase
      .from('inspections')
      .insert([
        { 
          email: email, 
          project_name: projectName, 
          lat: clickedPos.lat, 
          lng: clickedPos.lng,
          status: status, // Vlera e zgjedhur nga dropdown
          photo_urls: photoLinks.join(', ')
        }
      ]);

    if (error) {
      alert("Gabim: " + error.message);
    } else {
      alert("Sukses! Statusi u ruajt si: " + status);
      setClickedPos(null);
      setProjectName('');
      setPhotoLinks([]);
    }
    setIsSending(false);
  };

  if (!mounted) return null;

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <div style={sidebarStyle}>
        <h3 style={{fontSize: '16px', marginBottom: '15px', borderBottom: '1px solid #eee'}}>1.2 Formulari i të Dhënave</h3>
        
        <label style={labelS}>Email Address: *</label>
        <input style={inputS} value={email} onChange={e => setEmail(e.target.value)} placeholder="email@test.com" />

        <label style={labelS}>Projekti / Qëllimi: *</label>
        <input style={inputS} value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="Emri i projektit" />

        {/* FUSHA E RE PËR STATUSIN */}
        <label style={labelS}>Statusi i Kantierit:</label>
        <select style={inputS} value={status} onChange={e => setStatus(e.target.value)}>
          <option value="Në proces">🟡 Në proces</option>
          <option value="I përfunduar">🟢 I përfunduar</option>
          <option value="Ka probleme">🔴 Ka probleme</option>
          <option value="Pezulluar">⚪ Pezulluar</option>
        </select>

        <div style={{display: 'flex', gap: '5px', marginTop: '10px'}}>
          <input style={inputS} value={clickedPos?.lat || ''} placeholder="Lat" readOnly />
          <input style={inputS} value={clickedPos?.lng || ''} placeholder="Lon" readOnly />
        </div>

        <div style={gridContainer}>
          <button onClick={() => window.location.reload()} style={{...btnGrid, backgroundColor: '#007bff'}}>➕ Shto</button>
          <button onClick={handleSave} disabled={isSending} style={{...btnGrid, backgroundColor: '#007bff', gridColumn: 'span 2'}}>
             {isSending ? "Duke dërguar..." : "🚀 Dërgo të Dhënat"}
          </button>
          <button onClick={() => window.location.href='/results'} style={{...btnGrid, backgroundColor: '#28a745'}}>📊 Rezultatet</button>
        </div>
      </div>

      <MapContainer center={[41.3275, 19.8187]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Ortofoto (Esri)">
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Harta Standarde">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
        </LayersControl>
        <MapEvents setClickedPos={setClickedPos} />
        {clickedPos && <Marker position={[clickedPos.lat, clickedPos.lng]} />}
      </MapContainer>
    </div>
  );
}

const sidebarStyle = { position: 'absolute', top: '15px', left: '15px', width: '310px', backgroundColor: 'white', padding: '15px', zIndex: 1000, borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' };
const labelS = { fontSize: '12px', fontWeight: 'bold', display: 'block', marginTop: '5px' };
const inputS = { width: '100%', padding: '10px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '13px' };
const gridContainer = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '10px' };
=======
'use client'
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MapContainer, TileLayer, Marker, LayersControl, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapEvents({ setClickedPos }) {
  useMapEvents({
    click(e) { setClickedPos(e.latlng); },
  });
  return null;
}

export default function Map() {
  const [mounted, setMounted] = useState(false);
  const [clickedPos, setClickedPos] = useState(null);
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState('Në proces'); // Statusi default
  const [photoLinks, setPhotoLinks] = useState([]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleSave = async () => {
    if (!clickedPos || !email) return alert("Plotësoni Email-in dhe zgjidhni pikën!");
    setIsSending(true);

    const { error } = await supabase
      .from('inspections')
      .insert([
        { 
          email: email, 
          project_name: projectName, 
          lat: clickedPos.lat, 
          lng: clickedPos.lng,
          status: status, // Vlera e zgjedhur nga dropdown
          photo_urls: photoLinks.join(', ')
        }
      ]);

    if (error) {
      alert("Gabim: " + error.message);
    } else {
      alert("Sukses! Statusi u ruajt si: " + status);
      setClickedPos(null);
      setProjectName('');
      setPhotoLinks([]);
    }
    setIsSending(false);
  };

  if (!mounted) return null;

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <div style={sidebarStyle}>
        <h3 style={{fontSize: '16px', marginBottom: '15px', borderBottom: '1px solid #eee'}}>1.2 Formulari i të Dhënave</h3>
        
        <label style={labelS}>Email Address: *</label>
        <input style={inputS} value={email} onChange={e => setEmail(e.target.value)} placeholder="email@test.com" />

        <label style={labelS}>Projekti / Qëllimi: *</label>
        <input style={inputS} value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="Emri i projektit" />

        {/* FUSHA E RE PËR STATUSIN */}
        <label style={labelS}>Statusi i Kantierit:</label>
        <select style={inputS} value={status} onChange={e => setStatus(e.target.value)}>
          <option value="Në proces">🟡 Në proces</option>
          <option value="I përfunduar">🟢 I përfunduar</option>
          <option value="Ka probleme">🔴 Ka probleme</option>
          <option value="Pezulluar">⚪ Pezulluar</option>
        </select>

        <div style={{display: 'flex', gap: '5px', marginTop: '10px'}}>
          <input style={inputS} value={clickedPos?.lat || ''} placeholder="Lat" readOnly />
          <input style={inputS} value={clickedPos?.lng || ''} placeholder="Lon" readOnly />
        </div>

        <div style={gridContainer}>
          <button onClick={() => window.location.reload()} style={{...btnGrid, backgroundColor: '#007bff'}}>➕ Shto</button>
          <button onClick={handleSave} disabled={isSending} style={{...btnGrid, backgroundColor: '#007bff', gridColumn: 'span 2'}}>
             {isSending ? "Duke dërguar..." : "🚀 Dërgo të Dhënat"}
          </button>
          <button onClick={() => window.location.href='/results'} style={{...btnGrid, backgroundColor: '#28a745'}}>📊 Rezultatet</button>
        </div>
      </div>

      <MapContainer center={[41.3275, 19.8187]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Ortofoto (Esri)">
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Harta Standarde">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
        </LayersControl>
        <MapEvents setClickedPos={setClickedPos} />
        {clickedPos && <Marker position={[clickedPos.lat, clickedPos.lng]} />}
      </MapContainer>
    </div>
  );
}

const sidebarStyle = { position: 'absolute', top: '15px', left: '15px', width: '310px', backgroundColor: 'white', padding: '15px', zIndex: 1000, borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' };
const labelS = { fontSize: '12px', fontWeight: 'bold', display: 'block', marginTop: '5px' };
const inputS = { width: '100%', padding: '10px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '13px' };
const gridContainer = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '10px' };
>>>>>>> a5f1ea22 (instalo librarite e reja)
const btnGrid = { border: 'none', borderRadius: '5px', color: 'white', fontWeight: 'bold', padding: '12px 5px', cursor: 'pointer', fontSize: '11px' };