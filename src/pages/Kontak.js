import { useState } from 'react';
import './../css/Kontak.css';

function Kontak() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="kontak-root">
            <div className="kontak-container">
                <h1 className="kontak-title">Get In Touch</h1>
                <p className="kontak-subtitle">Let's work together! Feel free to reach out.</p>

                <div className="kontak-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-item">
                                <i className="fas fa-phone-alt"></i>
                                <div className="info-details">
                                    <h3>Phone</h3>
                                    <p>+62 896 5181 5986</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <div className="info-details">
                                    <h3>Email</h3>
                                    <p>sutiyoyulianto2000@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info-details">
                                    <h3>Location</h3>
                                    <p>Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="form-input"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Kontak;