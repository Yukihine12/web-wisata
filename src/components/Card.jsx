export default function Card({ item }) {
  // Format mata uang
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        {item.badge && <span className="card-badge">{item.badge}</span>}
        <img src={item.image} alt={item.name} className="card-img" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-desc">
          📍 {item.location || item.capacity || "Indonesia"} 
          {/* Tampilkan lokasi, kalau tidak ada tampilkan kapasitas (utk Jeep) */}
        </p>
        
        <div className="card-footer">
          <span className="price">{formatPrice(item.price)}</span>
          <button className="btn-card">Detail</button>
        </div>
      </div>
    </div>
  );
}