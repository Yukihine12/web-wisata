import "../styles/card.css"; // Import css kartu yang baru

export default function VillaCard({ data }) {
  return (
    <div className="card"> {/* Gunakan class 'card' */}
      <div className="card-img-wrapper">
        <img src={data.image} alt={data.name} className="card-img" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{data.name}</h3>
        <p className="card-info">📍 {data.location} • ⭐ {data.rating}</p>
        
        <div className="card-footer">
          <span className="price">{data.price} <small>/malam</small></span>
          <button className="btn-detail">Lihat Detail</button>
        </div>
      </div>
    </div>
  );
}