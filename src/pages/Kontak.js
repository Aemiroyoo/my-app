// Import React and necessary CSS
import './../css/Kontak.css';

function Kontak() {
return (
    <div className="contact-container">
        <h2 className="contact-title">Kontak</h2>
        <div className="contact-form">
            <div className="contact-info">
                <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <p>+62 123 456 789</p>
                </div>
                <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <p>email@example.com</p>
                </div>
                <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Jalan Example No. 123, Kota, Negara</p>
                </div>
            </div>
            <form className="form">
                <input type="text" className="form-input" placeholder="Nama" />
                <input type="email" className="form-input" placeholder="Email" />
                <textarea className="form-input" placeholder="Pesan" rows="4"></textarea>
                <button type="submit" className="submit-button">Kirim Pesan</button>
            </form>
        </div>
    </div>
)
}
export default Kontak;
    