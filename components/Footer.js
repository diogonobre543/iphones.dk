export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="container footer-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', padding: '40px 0' }}>
        <div className="footer-item">
          <p><strong>Datamarked ApS</strong><br />
            Østre Fælledvej 16<br />
            9400 Nørresundby</p>
          <p style={{ marginTop: '10px' }}>
            📞 <a href="tel:+4570400010" style={{ color: 'inherit', textDecoration: 'none' }}>+45 70 40 00 10</a><br />
            ✉️ <a href="mailto:salg@datamarked.dk" style={{ color: 'inherit', textDecoration: 'none' }}>salg@datamarked.dk</a>
          </p>
          <p>CVR: 31480191</p>
        </div>

        <div className="footer-item">
          <h3 style={{ marginBottom: '15px' }}>Butikkens åbningstider</h3>
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr><td style={{ paddingRight: '15px' }}>Mandag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Tirsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Onsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Torsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Fredag</td><td>12:00 - 15:00</td></tr>
            </tbody>
          </table>
        </div>

        <div className="footer-item">
          <h3 style={{ marginBottom: '15px' }}>Kundeservice</h3>
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr><td style={{ paddingRight: '15px' }}>Mandag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Tirsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Onsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Torsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Fredag</td><td>9:00 - 15:00</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
}
