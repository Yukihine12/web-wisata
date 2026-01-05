import { FaHome } from "react-icons/fa";
import "../styles/card.css";

export default function DestinationCard({ data }) {
  return (
    <div className="destination-card">
      <div className="card-image">
        <img src={data.image} alt={data.title} />
        <span className="badge">{data.type}</span>
      </div>

      <div className="card-content">
        <h4>{data.title}</h4>

        <div className="price-row">
          <div>
            <span className="price-discount">Rp {data.discount}</span>
            <span className="price">Rp {data.price}</span>
          </div>

          <div className="villa-icon">
            <FaHome />
            <span className="tooltip">
              Tersedia opsi sewa villa di lokasi ini
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
