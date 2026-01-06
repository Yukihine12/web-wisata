import React from 'react';
import './App.css'; // Panggil CSS yang tadi dibuat

// --- DATA KITA TARUH DISINI SAJA ---
const destinations = [
  { id: 1, name: "Lava Tour Guntur", price: "Rp 350.000", rating: 4.8, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { id: 2, name: "Hutan Pinus Cirorek", price: "Rp 250.000", rating: 4.5, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
  { id: 3, name: "Curug Cihanyawar", price: "Rp 400.000", rating: 4.7, image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9" },
  { id: 4, name: "Situ Cibereum", price: "Rp 400.000", rating: 4.6, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { id: 5, name: "Gunung Cikuray", price: "Rp 400.000", rating: 4.9, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" }
];

const villas = [
  { id: 1, name: "Villa Pinus", price: "Rp 1.5jt", rating: 5.0, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d" },
  { id: 2, name: "Villa Danau", price: "Rp 2.0jt", rating: 4.8, image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233" },
  { id: 3, name: "Cottage Kayu", price: "Rp 850rb", rating: 4.7, image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c" }
];

const jeeps = [
  { id: 1, name: "Jeep Hardtop", price: "Rp 600rb", rating: 4.9, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf" },
  { id: 2, name: "Jeep Rubicon", price: "Rp 1.2jt", rating: 5.0, image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b" }
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