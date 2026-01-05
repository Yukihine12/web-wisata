export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section-wrapper container">
      <div className="section-header">
        <h2>{title}</h2>
        <p style={{ color: '#666' }}>{subtitle}</p>
      </div>
      <div className="grid">
        {children}
      </div>
    </section>
  );
}