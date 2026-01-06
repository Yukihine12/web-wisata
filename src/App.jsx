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
      {/* --- 3. TOMBOL FLOATING (ICON WA -> EXPAND) --- */}
      <button 
        className="floating-btn" 
        onClick={() => setIsModalOpen(true)}
      >
        {/* Icon WhatsApp SVG */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="wa-icon"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        {/* Teks ini akan muncul saat hover */}
        <span className="btn-text">Booking Sekarang</span>
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
      <footer style={{textAlign: 'center',  paddingTop: '0px', background: '#e9ecef', marginTop: '10px'}}>
        <p>&copy; 2025 Wisata Alam Garut. All rights reserved.</p>
      </footer>
    </>
  );
}