import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/villa-jeep.css";

export default function VillaCard({ data }) {
  return (
    <div className="villa-card">
      <img src={data.image} alt={data.name} />

      <div className="villa-content">
        <span className="villa-badge">{data.badge}</span>

        <h4>{data.name}</h4>

        <p className="location">
          <FaMapMarkerAlt /> {data.location}
        </p>

        <div className="villa-footer">
          <div className="rating">
            <FaStar /> {data.rating}
          </div>

          <div className="price">
            Rp {data.price}
            <span>/ malam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
