import Header from "../components/Header";
import VillaCard from "../components/VillaCard";
import { villas } from "../data/villas";
import "../styles/home.css";

export default function Villas() {
  return (
    <>
      <Header />

      <section className="page-hero small">
        <h1>Sewa Villa</h1>
      </section>

      <section className="section">
        <div className="grid">
          {villas.map(villa => (
            <VillaCard key={villa.id} data={villa} />
          ))}
        </div>
      </section>
    </>
  );
}
