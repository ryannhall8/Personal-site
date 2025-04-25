import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage'; // make sure path is correct!
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
          {/* <Route path="/HomePage" element={<HomePage />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div className="homepage-container">
        <h1>Hello, I'm Ryann Hall.</h1>
        <p> I'm a software developer based in Richmond, Virginia. I specialize in building exceptional digital experiences.</p>
        <img src="/mephoto.png" alt="Ryann Hall" />
        <div className="about">
          <h2>About Me</h2>
          <p>Hi, I'm Ryann Hall! I am a software developer with a passion for creating responsive, intuitive, and  user focused applications. I love bringing ideas to life through clean design, efficient code, and a strong attention to detail. No matter the project I am working on, I am driven by the challenge of solving real problems through technology. Beyond coding, I have a background in childcare, which has taught me the value of patience, empathy, and communication, which are all skills I bring into my work as a developer. I am also a huge dog lover (pit bulls have a special place in my heart!), a fitness enthusiast who loves pilates and strength training, as well as long walks, and someone who genuinely enjoys learning new tools and exploring fresh ideas. I'm always excited to collaborate, grow, and contribute to projects that make a difference.</p>
        </div>
      </div>
    </div>
  );
}

export default App;