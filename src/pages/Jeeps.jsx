import Header from "../components/Header";
import JeepCard from "../components/JeepCard";
import { jeeps } from "../data/jeeps";
import "../styles/home.css";

export default function Jeeps() {
  return (
    <>
      <Header />

      <section className="page-hero small">
        <h1>Sewa Jeep</h1>
      </section>

      <section className="section">
        <div className="grid">
          {jeeps.map(jeep => (
            <JeepCard key={jeep.id} data={jeep} />
          ))}
        </div>
      </section>
    </>
  );
}
