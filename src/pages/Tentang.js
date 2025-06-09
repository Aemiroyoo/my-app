import './../css/Tentang.css';

function Tentang() {
    return (
        <div className="tentang-root">
            <div className="tentang-container">
                <h1 className="tentang-title">Portfolio</h1>
                
                {/* About Section */}
                <section className="about-section">
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        I'm a passionate Full Stack Developer with expertise in building modern web applications.
                        Specialized in React, Node.js, and PHP development with a keen eye for design and user experience.
                    </p>
                </section>

                {/* Projects Section */}
                <section className="projects-section">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/project1.jpg" alt="Project 1" />
                            </div>
                            <div className="project-info">
                                <h3>E-Commerce Platform</h3>
                                <p>Full-stack e-commerce solution with React and Node.js</p>
                                <div className="project-tech">
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>MongoDB</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src="/project2.jpg" alt="Project 2" />
                            </div>
                            <div className="project-info">
                                <h3>Portfolio Website</h3>
                                <p>Modern portfolio with React and CSS animations</p>
                                <div className="project-tech">
                                    <span>React</span>
                                    <span>CSS3</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src="/project3.jpg" alt="Project 3" />
                            </div>
                            <div className="project-info">
                                <h3>Task Management App</h3>
                                <p>Full-featured task management application</p>
                                <div className="project-tech">
                                    <span>React</span>
                                    <span>PHP</span>
                                    <span>MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="skills-section">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Frontend</h3>
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript (ES6+)</li>
                                <li>HTML5 & CSS3</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Backend</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Tools</h3>
                            <ul>
                                <li>Git & GitHub</li>
                                <li>VS Code</li>
                                <li>Docker</li>
                                <li>Postman</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Tentang;