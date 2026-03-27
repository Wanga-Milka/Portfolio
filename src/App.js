import React, { useState } from 'react';
import './App.css';
import profileImage from './assets/about.jpeg';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="App">
         <nav className="navbar">
        <ul>
          <li onClick={() => handleSectionClick('about')}>About</li>
          <li onClick={() => handleSectionClick('skills')}>Technical Skills</li>
          <li onClick={() => handleSectionClick('experience')}>Experience</li>
          <li onClick={() => handleSectionClick('education')}>Education</li>
          <li onClick={() => handleSectionClick('certifications')}>Certifications</li>
          <li onClick={() => handleSectionClick('projects')}>Projects</li>
          <li onClick={() => handleSectionClick('contact')}>Contact</li>
        </ul>
      </nav>
            <header>
        <div className="container">
         <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-text">
          <p className="subtitle">Software Engineer | Solutions Architect | AI Automation Engineer</p>
         
        </div>
      </div>
          <h1>Bakhuya Milka Wanga</h1>
        </div>
      </header>

      <section id="about" className={`section ${activeSection === 'about' ? 'active' : ''}`}>
        <h2>About Me</h2>
     
        <p>
          I'm a passionate Software Engineer and Solutions Architect with expertise in designing scalable applications,
          workflow automation, and AI-driven solutions. I enjoy solving complex problems, building modern web systems, 
          and improving business processes through technology.
        </p>
      </section>

      <section id="skills" className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div><strong>Languages:</strong> Java, PHP, JavaScript, C/C++, SQL</div>
          <div><strong>Frameworks:</strong> Spring Boot, AngularJS, ReactJS, Node.js</div>
          <div><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Firebase</div>
          <div><strong>Tools:</strong> Git, Jira, Postman, Insomnia</div>
          <div><strong>Automation:</strong> n8n, Infobip API integration</div>
          <div><strong>Security:</strong> OAuth2.0, JWT, SSL/TLS</div>
        </div>
      </section>

          <section id="experience" className={`section ${activeSection === 'experience' ? 'active' : ''}`}>
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Solutions Architect-NCBA Bank <span>(Aug 2025 – Present)</span></h3>
            <ul>
              <li>Designed technical requirement documents and project architecture.</li>
              <li>Integrated n8n with WhatsApp for automated client workflows.</li>
              <li>Managed Infobip chatbot solutions for multi-channel communication.</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Software Engineer – TangazoLetu Ltd <span>(Feb 2024 – Present)</span></h3>
            <ul>
              <li>Developed secure, scalable backend systems with Java and PHP.</li>
              <li>Integrated RESTful and GraphQL APIs for front-end clients.</li>
              <li>Implemented CI/CD and performance optimization for production systems.</li>
              <li>Built responsive UIs using Angular and JSP pages.</li>
            </ul>
          </div>     
            <div className="experience-card">
            <h3>Industrial Attachment – SafetyPlus Consulting Ltd <span>(Sep 2022 – Dec 2022)</span></h3>
            <ul>
              <li>Participated in IT support tasks, including hardware/software troubleshooting and system
              setup.</li>
             
            </ul>
          </div>     
           <div className="experience-card">
            <h3>Industrial Training – Kibabii University <span>(Oct 2021– Dec 2021)</span></h3>
            <ul>
              <li>Software Development: Developed applications using PHP and Android Java, focusing on
              app creation, testing, and deployment.</li>
              <li>Database Management: Managed MySQL databases, utilizing Navicat for efficient
              database administration and maintenance.</li>
              <li>Web Development: Contributed to web development tasks using Dreamweaver, including
              designing and deploying websites.</li>
              <li>Network Administration: Assisted with network administration duties, ensuring smooth
              network operations, security, and connectivity.</li>
              <li></li>
                          
            </ul>
          </div>    
        </div>
      </section>

      <section id="education" className={`section ${activeSection === 'education' ? 'active' : ''}`}>
        <h2>Education</h2>
        <ul>
          <li><strong>BSc. Computer Science</strong></li>
        </ul>
      </section>

          <section id="certifications" className={`section ${activeSection === 'certifications' ? 'active' : ''}`}>
        <h2>Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <h3>Graduate Trainee </h3>
            <h5>Comprehensive understanding of both the technical and business aspects of software development. The blend of technical expertise and business acumen has prepared me to contribute meaningfully to projects, tackle challenges from multiple angles, and ensure that technology serves as a driving force for business success.</h5>
            <p2>TangazoLetu Ltd</p2>
          </div>
          <div className="certification-card">
            <h3>Ethical Hacking & Cyber Security </h3>
            <h5>Essential skills and techniques needed to protect systems, networks, and data from cyber threats. It includes practical knowledge in ethical hacking and cyber security principles to defend against malicious attacks and secure digital infrastructures.</h5>
            <p2>Simplilearn SkillUp</p2>
          </div>
          <div className="certification-card">
            <h3>Full Stack Web Development Bootcamp </h3>
            <h5>Designed to provide participants with comprehensive skills in full-stack web development, covering both front-end and back-end technologies. It offers hands-on training in creating dynamic, interactive, and responsive web applications from scratch, preparing students for real-world development roles.</h5>
            <p2> AWS Bootcamp by ShapeAI</p2>
          </div>
          
        </div>
      </section>

      <section id="projects" className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Workflow Automation using n8n</h3>
            <p>Implemented WhatsApp-based business automation with Infobip API for customer engagement.</p>
          </div>
          <div className="project-card">
            <h3>AI Automation System</h3>
            <p>Developed custom intelligent task automation pipelines using open AI tools and APIs.</p>
          </div>
          <div className="project-card">
            <h3>Accounting & Cost Control App</h3>
            <p>Built a full-stack web system for improving internal accounting processes and cost control.</p>
          </div>
        </div>
      </section>
      

      <section id="contact" className={`section contact ${activeSection === 'contact' ? 'active' : ''}`}>
        <h2>Contact</h2>
        <p>Let's connect! Feel free to reach out via email:</p>
        <a href="mailto:bakhuyamilka@gmail.com" className="btn">bakhuyamilka@gmail.com</a>
      </section>
      

      <footer>
       <p>© {new Date().getFullYear()} Bakhuya Milka Wanga. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;