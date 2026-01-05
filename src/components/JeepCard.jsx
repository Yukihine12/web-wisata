import { FaUsers, FaCheckCircle } from "react-icons/fa";
import "../styles/villa-jeep.css";

export default function JeepCard({ data }) {
  return (
    <div className="jeep-card">
      <img src={data.image} alt={data.name} />

      <div className="jeep-content">
        <h4>{data.name}</h4>

        <p className="capacity">
          <FaUsers /> {data.capacity} Orang
        </p>

        <ul className="features">
          {data.features.map((item, index) => (
            <li key={index}>
              <FaCheckCircle /> {item}
            </li>
          ))}
        </ul>

        <div className="jeep-price">
          Rp {data.price} / trip
        </div>
      </div>
    </div>
  );
}
