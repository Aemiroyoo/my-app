import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tentang">Tentang</Link></li>
            <li><Link to="/kontak">Kontak</Link></li>
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
