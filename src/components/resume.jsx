import { FaDownload } from "react-icons/fa";

function Resume() {
    return (
      <div className="resume-container">
        <h1>Resume</h1>

        <a href="/resume.pdf" download className="resume-button">
        <FaDownload className="resume-icon" />
        Download Resume
       </a>

        <h2>Education</h2>
        <p>I recently graduated from the web development program at Virginia Tech, powered by Fullstack Academy, where I gained hands-on experience in both front-end and back-end technologies. Throughout the program, I developed a solid foundation in building modern, scalable applications using tools like React, Node.js, and PostgreSQL. The program's intensive curriculum provided me with a deep understanding of the entire web development process, from designing intuitive user interfaces to creating back-end systems. I’m passionate about continuing to learn and grow as a developer, and I’m excited to apply the skills I’ve acquired to real-world projects.</p>
        <h2>Experience</h2>
        <p>Over the course of my career, I’ve had the opportunity to work on a variety of projects that have allowed me to apply my skills in web development, problem-solving, and collaboration. My experience includes building responsive, user-friendly websites and applications using technologies like React, JavaScript, HTML, and CSS, as well as working with back-end systems using Node.js and PostgreSQL. I’ve developed individual projects where I’ve honed my ability to write clean, efficient code and translate client requirements into functional features. Whether working on an e-commerce platform or any application, I am always focused on delivering high-quality solutions.</p>
      </div>
    );
  }
  
  export default Resume;