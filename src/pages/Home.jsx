import Header from "../components/Header";
import DestinationCard from "../components/DestinationCard";
import VillaCard from "../components/VillaCard";
import JeepCard from "../components/JeepCard";

import { destinations } from "../data/destinations";
import { villas } from "../data/villas";
import { jeeps } from "../data/jeeps";

import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <h1>Jelajahi Wisata Terbaik Indonesia</h1>
      </section>

      <section className="section">
        <h2>Destinasi Wisata</h2>
        <div className="card-row">
          {destinations.map(item => (
            <DestinationCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Sewa Villa</h2>
        <div className="grid">
          {villas.map(villa => (
            <VillaCard key={villa.id} data={villa} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Sewa Jeep</h2>
        <div className="grid">
          {jeeps.map(jeep => (
            <JeepCard key={jeep.id} data={jeep} />
          ))}
        </div>
      </section>
    </>
  );
}
