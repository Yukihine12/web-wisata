import Header from "../components/Header";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import "../styles/home.css";

export default function Destinations() {
  return (
    <>
      <Header />

      <section className="page-hero small">
        <h1>Destinasi Wisata</h1>
      </section>

      <section className="section">
        <div className="grid">
          {destinations.map(item => (
            <DestinationCard key={item.id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
