import React from "react";
import Header from "../components/Header"; // Header utama (Logo/Login)
// Import Komponen Kartu
import DestinationCard from "../components/DestinationCard";
import VillaCard from "../components/VillaCard";
import JeepCard from "../components/JeepCard";

// Import Data
import { destinations } from "../data/destinations";
import { villas } from "../data/villas";
import { jeeps } from "../data/jeeps";

// Import CSS
import "../styles/global.css";
import "../styles/home.css";
// Pastikan buat file card.css (lihat poin 4 di bawah)
import "../styles/card.css"; 

export default function Home() {
  return (
    <>
      {/* 1. Header Utama (Hanya muncul sekali di paling atas) */}
      <Header />

      {/* 2. Hero Section */}
      <section className="hero">
        <h1>Jelajahi Alam Garut</h1>
        <p>Temukan ketenangan di destinasi, villa, dan petualangan terbaik.</p>
      </section>

      {/* 3. Sticky Navigation (Untuk Scroll) */}
      <div className="sticky-nav-wrapper">
        <nav className="sticky-nav">
          <a href="#destinasi" className="nav-link">🏔️ Destinasi</a>
          <a href="#villa" className="nav-link">🏡 Villa</a>
          <a href="#jeep" className="nav-link">🚙 Jeep</a>
        </nav>
      </div>

      {/* 4. Konten Utama (Semua ditampilkan vertikal) */}
      <div className="container">
        
        {/* SECTION DESTINASI */}
        <section id="destinasi" className="section">
          <h2 className="section-title">Destinasi Populer</h2>
          <p className="section-subtitle">Kunjungi tempat-tempat eksotis bernuansa alam</p>
          <div className="grid">
            {destinations.map((item) => (
              <DestinationCard key={item.id} data={item} />
            ))}
          </div>
        </section>

        {/* SECTION VILLA */}
        <section id="villa" className="section">
          <h2 className="section-title">Penginapan Nyaman</h2>
          <p className="section-subtitle">Istirahat tenang dengan pemandangan asri</p>
          <div className="grid">
            {villas.map((item) => (
              <VillaCard key={item.id} data={item} />
            ))}
          </div>
        </section>

        {/* SECTION JEEP */}
        <section id="jeep" className="section">
          <h2 className="section-title">Sewa Jeep Petualang</h2>
          <p className="section-subtitle">Jelajahi medan menantang dengan aman</p>
          <div className="grid">
            {jeeps.map((item) => (
              <JeepCard key={item.id} data={item} />
            ))}
          </div>
        </section>

      </div>
      
      {/* Footer bisa ditambahkan di sini */}
      <footer style={{textAlign: 'center', padding: '40px', color: '#666'}}>
        &copy; 2024 Wisata Alam. All rights reserved.
      </footer>
    </>
  );
}