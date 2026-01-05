// DestinationCard.jsx (Terapkan hal sama ke VillaCard & JeepCard)
import "../styles/card.css"; 

export default function DestinationCard({ data }) {
  // Pastikan data gambar aman, jika error kasih placeholder
  const imageSrc = data.image || "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={imageSrc} alt={data.name} className="card-img" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{data.name}</h3>
        
        {/* Contoh info lokasi dengan ikon */}
        <p className="card-info">
           📍 {data.location || "Indonesia"} 
        </p>
        
        {/* Jika ada deskripsi singkat, tambahkan class line-clamp agar tidak kepanjangan */}
        {data.description && (
          <p style={{fontSize: '13px', color: '#777', marginBottom: '15px', lineHeight: '1.5'}}>
            {data.description.substring(0, 80)}...
          </p>
        )}

        <div className="card-footer">
          <div className="price">
            {data.price || "Gratis"}
            {data.price && <small>/ orang</small>}
          </div>
          <button className="btn-detail">Lihat →</button>
        </div>
      </div>
    </div>
  );
}