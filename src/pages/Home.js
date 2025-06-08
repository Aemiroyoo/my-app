// import "../App.css";
import './../css/Home.css';

function Home() {
    return (
        <div className="home-root">
            <div className="home-card">
                <h1 className="home-title">Welcome Home!</h1>
                <p className="home-desc">
                    Discover amazing features and enjoy your experience with our application.
                </p>
                <a className="home-link" href="/tentang">
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Home;
