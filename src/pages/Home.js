import './../css/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-root">
            <div className="home-hero">
                <div className="home-content">
                    <h1 className="home-title">Hi, I'm <span className="highlight">Sutiyo Yulianto</span></h1>
                    <h2 className="home-subtitle">Full Stack Developer</h2>
                    <p className="home-desc">
                        I craft responsive websites where technology meets creativity. 
                        Specialized in building modern web applications with React and Node.js.
                    </p>
                    <div className="home-buttons">
                        <Link to="/kontak" className="home-link primary">Hire Me</Link>
                        <Link to="/tentang" className="home-link secondary">My Work</Link>
                    </div>
                </div>

                <div className="home-stats">
                    <div className="stat-item">
                        <span className="stat-number">3+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Happy Clients</span>
                    </div>
                </div>

                <div className="tech-stack">
                    <h3>Tech Stack</h3>
                    <div className="tech-icons">
                        <i className="fab fa-react" title="React"></i>
                        <i className="fab fa-js" title="JavaScript"></i>
                        <i className="fab fa-node" title="Node.js"></i>
                        <i className="fab fa-php" title="PHP"></i>
                        <i className="fab fa-html5" title="HTML5"></i>
                        <i className="fab fa-css3" title="CSS3"></i>
                        <i className="fab fa-git-alt" title="Git"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;