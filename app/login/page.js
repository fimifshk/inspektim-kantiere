<<<<<<< HEAD
'use client'
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Gabim: ' + error.message);
      setLoading(false);
    } else {
      router.push('/'); // Të dërgon te harta pas login-it
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f4f7f6',
      fontFamily: 'sans-serif'
    }}>
      <form onSubmit={handleLogin} style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Inspektim Kantiere</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Identifikohuni për të aksesuar hartën</p>
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={inputStyle}
        />
        <input 
          type="password" 
          placeholder="Fjalëkalimi" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={inputStyle}
        />
        
        <button 
          type="submit" 
          disabled={loading}
          style={{
            ...buttonStyle,
            backgroundColor: loading ? '#ccc' : '#007bff'
          }}
        >
          {loading ? 'Duke hyrë...' : 'Hyr'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  borderRadius: '6px',
  border: '1px solid #ddd',
  fontSize: '16px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  border: 'none',
  borderRadius: '6px',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.3s'
=======
'use client'
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Gabim: ' + error.message);
      setLoading(false);
    } else {
      router.push('/'); // Të dërgon te harta pas login-it
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f4f7f6',
      fontFamily: 'sans-serif'
    }}>
      <form onSubmit={handleLogin} style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Inspektim Kantiere</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Identifikohuni për të aksesuar hartën</p>
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={inputStyle}
        />
        <input 
          type="password" 
          placeholder="Fjalëkalimi" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={inputStyle}
        />
        
        <button 
          type="submit" 
          disabled={loading}
          style={{
            ...buttonStyle,
            backgroundColor: loading ? '#ccc' : '#007bff'
          }}
        >
          {loading ? 'Duke hyrë...' : 'Hyr'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  borderRadius: '6px',
  border: '1px solid #ddd',
  fontSize: '16px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  border: 'none',
  borderRadius: '6px',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.3s'
>>>>>>> a5f1ea22 (instalo librarite e reja)
};