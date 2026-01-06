import React, { useState } from 'react'; // 1. IMPORT useState DI SINI
import './App.css'; 

// --- DATA DUMMY (TETAP DISINI) ---
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
  
  // --- 2. STATE & FUNGSI (SIMPAN DI DALAM APP, SEBELUM RETURN) ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    destinasi: 'Lava Tour Guntur', 
    tanggal: '',
    jumlahOrang: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const kirimKeWA = (e) => {
    e.preventDefault(); 
    
    // GANTI NOMOR WA DISINI
    const nomorWA = "628123456789"; 

    const pesan = `Halo Admin, saya ingin booking wisata.%0A%0A` +
                  `Nama: ${formData.nama}%0A` +
                  `Destinasi: ${formData.destinasi}%0A` +
                  `Tanggal: ${formData.tanggal}%0A` +
                  `Jumlah Orang: ${formData.jumlahOrang} orang%0A%0A` +
                  `Mohon infonya, Terima kasih.`;

    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div>
          <h1>Wisata Alam Garut</h1>
          <p>Jelajahi keindahan Garut bersama kami</p>
        </div>
      </div>

      {/* MENU NAVIGASI */}
      <div className="sticky-nav">
        <div className="nav-content">
          <div className="nav-links">
            <a href="#destinasi">Destinasi</a>
            <a href="#villa">Villa</a>
            <a href="#jeep">Jeep</a>
          </div>
        </div>
      </div>

      {/* KONTEN UTAMA */}
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
                  {/* Tips: Tombol ini juga bisa dibuat membuka modal jika mau */}
                  <button className="btn" onClick={() => setIsModalOpen(true)}>Pesan</button>
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
                  <button className="btn" onClick={() => setIsModalOpen(true)}>Lihat</button>
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
                  <button className="btn" onClick={() => setIsModalOpen(true)}>Sewa</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div> {/* Tutup div container */}

      {/* --- 3. TOMBOL FLOATING (DIUBAH JADI BUTTON) --- */}
      <button 
        className="floating-btn" 
        onClick={() => setIsModalOpen(true)}
      >
        📅 Booking Sekarang
      </button> 

      {/* --- 4. MODAL FORMULIR (DILETAKKAN DI SINI) --- */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Formulir Pemesanan</h3>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
            </div>
            
            <form onSubmit={kirimKeWA}>
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input 
                  type="text" 
                  name="nama" 
                  placeholder="Contoh: Budi Santoso" 
                  value={formData.nama} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Pilih Destinasi</label>
                <select name="destinasi" value={formData.destinasi} onChange={handleChange}>
                  <option value="Lava Tour Guntur">Lava Tour Guntur</option>
                  <option value="Hutan Pinus Cirorek">Hutan Pinus Cirorek</option>
                  <option value="Curug Cihanyawar">Curug Cihanyawar</option>
                  <option value="Gunung Cikuray">Gunung Cikuray</option>
                  <option value="Sewa Villa">Sewa Villa</option>
                  <option value="Sewa Jeep">Sewa Jeep</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tanggal Rencana</label>
                <input 
                  type="date" 
                  name="tanggal" 
                  value={formData.tanggal} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Jumlah Orang</label>
                <input 
                  type="number" 
                  name="jumlahOrang" 
                  placeholder="Misal: 5" 
                  value={formData.jumlahOrang} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <button type="submit" className="submit-wa-btn">
                Kirim ke WhatsApp 🚀
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{textAlign: 'center', padding: '20px', background: '#e9ecef', marginTop: '40px'}}>
        <p>&copy; 2025 Wisata Alam Garut. All rights reserved.</p>
      </footer>
    </>
  );
}