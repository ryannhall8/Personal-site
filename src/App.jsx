import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // make sure path is correct!
import Navbar from './components/navbar';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="header">
          <h1 className="title">Ryann Hall</h1>
          <Navbar />
        </div>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;