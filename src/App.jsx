import React from 'react';
import './App.css'; // Panggil CSS yang tadi dibuat

// --- DATA KITA TARUH DISINI SAJA ---
const destinations = [
  { id: 1, name: "Gunung Bromo", price: "Rp 350.000", image: "https://images.unsplash.com/photo-1588668214407-6ea9e6d8c27c" },
  { id: 2, name: "Kawah Ijen", price: "Rp 250.000", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { id: 3, name: "Ranu Kumbolo", price: "Rp 400.000", image: "https://images.unsplash.com/photo-1605537964076-3f0d22c15d45" }
];

const villas = [
  { id: 1, name: "Villa Pinus", price: "Rp 1.500.000", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d" },
  { id: 2, name: "Villa Danau", price: "Rp 2.000.000", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233" },
  { id: 3, name: "Cottage Kayu", price: "Rp 850.000", image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c" }
];

const jeeps = [
  { id: 1, name: "Jeep Hardtop", price: "Rp 600.000", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf" },
  { id: 2, name: "Jeep Rubicon", price: "Rp 1.200.000", image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b" }
];

// --- KOMPONEN UTAMA ---
export default function App() {
 
 
 
  return (
    <>
      {/* 1. HERO SECTION */}
      <div className="hero">
        <div>
          <h1>Wisata Alam Garut</h1>
          <p>Jelajahi keindahan Garut bersama kami</p>
        </div>
      </div>

      {/* 2. MENU NAVIGASI (Sticky) */}
      <div className="sticky-nav">
        <div class="nav-content">
          <div className="nav-links">
            <a href="#destinasi">Destinasi</a>
            <a href="#villa">Villa</a>
            <a href="#jeep">Jeep</a>
          </div>
        </div>
      </div>

      {/* 3. KONTEN UTAMA */}
      <div className="container">
        
        {/* Bagian Destinasi */}
        <h2 id="destinasi" className="section-title">Destinasi Favorit</h2>
        <div className="grid">
          {destinations.map(item => (
            <div key={item.id} className="card">
              <div className="card-img-box">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>Nikmati pemandangan alam terbaik.</p>
                <div className="card-footer">
                  <span>{item.price}</span>
                  <button className="btn">Pesan</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bagian Villa */}
        <h2 id="villa" className="section-title">Penginapan Villa</h2>
        <div className="grid">
          {villas.map(item => (
            <div key={item.id} className="card">
              <div className="card-img-box">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>Fasilitas lengkap, nyaman & tenang.</p>
                <div className="card-footer">
                  <span>{item.price}</span>
                  <button className="btn">Lihat</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bagian Jeep */}
        <h2 id="jeep" className="section-title">Sewa Jeep</h2>
        <div className="grid">
          {jeeps.map(item => (
            <div key={item.id} className="card">
              <div className="card-img-box">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>Siap untuk medan offroad.</p>
                <div className="card-footer">
                  <span>{item.price}</span>
                  <button className="btn">Sewa</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{textAlign: 'center', padding: '20px', background: '#e9ecef'}}>
        <p>&copy; 2025 Wisata Alam Garut. All rights reserved.</p>
      </footer>
    </>
  );
}