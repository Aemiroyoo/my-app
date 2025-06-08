import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-container">
          <ul className="nav-list">
            <li><NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
            <li><NavLink to="/tentang" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Tentang</NavLink></li>
            <li><NavLink to="/kontak" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Kontak</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
