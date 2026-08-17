import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-dot"></span>
          SIMRA
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Connect
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">
          <div className="availability">
            <span></span>
            Open to opportunities
          </div>

          <p className="hero-kicker">COMPUTER SCIENCE ENGINEER</p>

          <h1>Syeda Simra Fatima</h1>

          <p className="hero-role">
            Programming · Software Development · Cybersecurity · Technology
          </p>

          <p className="hero-text">
            Building practical digital solutions through programming, software
            development, cybersecurity, and technology-driven problem solving.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-button">
              Explore My Work
              <span>↗</span>
            </a>

            <a
              href="/resume.pdf"
              className="resume-button"
              download="Syeda_Simra_Fatima_Resume.pdf"
            >
              Download Resume
              <span>↓</span>
            </a>

            <a href="#about" className="text-button">
              More about me
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-side-note">
          <span>BASED IN</span>
          <strong>INDIA</strong>
        </div>

        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <div className="section-label">
          <span>About</span>
        </div>

        <div className="about-layout">
          <div className="about-heading">
            <p className="small-label">WHO I AM</p>

            <h2>
              Curious about technology.
              <em>Driven to build.</em>
            </h2>
          </div>

          <div className="about-content">
            <p className="lead">
              A Computer Science Engineer with hands-on exposure across software
              development, cybersecurity, artificial intelligence, IoT, and
              technology projects.
            </p>

            <p>
              My journey has involved building applications, exploring
              cybersecurity through practical labs, developing intelligent
              systems, and working on business and entrepreneurship-focused
              projects.
            </p>

            <p>
              I enjoy learning by building and am open to opportunities across
              software development, programming, cybersecurity, technology, and
              advanced studies.
            </p>

            <div className="focus-list">
              <div>
                <span>01</span>
                <strong>Cybersecurity</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Software & Programming</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Technology & Innovation</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section experience" id="experience">
        <div className="section-label">
          <span>Experience</span>
        </div>

        <div className="experience-intro">
          <div>
            <p className="small-label">PROFESSIONAL JOURNEY</p>

            <h2>
              Building experience through
              <br />
              <em>practical work.</em>
            </h2>
          </div>

          <p>
            Practical experience spanning business development,
            entrepreneurship, cybersecurity, and technology-focused work.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <span className="experience-type">INTERNSHIP · 4 MONTHS</span>

              <h3>Movidu Technology Private Limited</h3>

              <p>In collaboration with OneStop.ai</p>
            </div>

            <span className="experience-year">2026</span>
          </div>

          <div className="experience-roles">
            <div className="role">
              <span className="role-line"></span>

              <div>
                <p className="role-label">BUSINESS ASSOCIATE</p>

                <h4>Business Development & Entrepreneurship</h4>

                <p>
                  Gained practical exposure to business development, startup
                  concepts, entrepreneurship, professional communication,
                  project activities, and business-oriented problem solving.
                </p>
              </div>
            </div>

            <div className="role">
              <span className="role-line"></span>

              <div>
                <p className="role-label">CYBERSECURITY</p>

                <h4>Security & Penetration Testing</h4>

                <p>
                  Gained hands-on exposure to mobile and web application
                  security testing, ethical hacking, vulnerability assessment,
                  security tools, and practical cybersecurity exercises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section work" id="work">
        <div className="section-label">
          <span>Selected Work</span>
        </div>

        <div className="work-heading">
          <div>
            <p className="small-label">PROJECTS</p>

            <h2>
              Things I've
              <em>built & explored.</em>
            </h2>
          </div>

          <p>
            A collection of academic, technical, cybersecurity, application,
            IoT, and innovation projects.
          </p>
        </div>

        {/* Featured Project */}
        <div className="featured-project">
          <div className="project-visual brain">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="brain-core">
              <span>AI</span>
            </div>
          </div>

          <div className="project-info">
            <span className="project-type">
              FEATURED · AI / COMPUTER VISION
            </span>

            <h3>
              Brain Hemorrhage
              <br />
              Detection & Prediction
            </h3>

            <p>
              A CNN-based system developed to analyze brain CT images for
              hemorrhage detection and prediction, with rapid result
              presentation and structured report generation.
            </p>

            <div className="project-stat">
              <strong>91%</strong>
              <span>Model Accuracy</span>
            </div>

            <div className="tags">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>OpenCV</span>
              <span>CNN</span>
              <span>Gradio</span>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          <article className="project-card large-card">
            <div className="card-icon code-icon">&lt;/&gt;</div>

            <span>SOFTWARE · SECURITY</span>

            <h3>Secure Authentication System</h3>

            <p>
              A Flask-based application focused on secure authentication, user
              access, and practical web security concepts.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Flask</span>
              <span>Web Security</span>
            </div>
          </article>

          <article className="project-card">
            <div className="card-icon">◇</div>

            <span>WEB DEVELOPMENT</span>

            <h3>Bafa Fitness</h3>

            <p>
              A modern responsive fitness website created with a clean and
              user-focused interface.
            </p>

            <div className="tags">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
            </div>
          </article>

          <article className="project-card">
            <div className="card-icon">+</div>

            <span>APPLICATION</span>

            <h3>Women Safety Application</h3>

            <p>
              A safety-focused application designed around emergency assistance
              and quick access to safety-oriented features.
            </p>

            <div className="tags">
              <span>Application Development</span>
              <span>Safety</span>
            </div>
          </article>

          <article className="project-card">
            <div className="card-icon">∿</div>

            <span>IoT · WEATHER</span>

            <h3>IoT Weather Forecasting</h3>

            <p>
              An IoT project focused on environmental data collection,
              monitoring, and weather-related forecasting.
            </p>

            <div className="tags">
              <span>IoT</span>
              <span>Sensors</span>
              <span>Monitoring</span>
            </div>
          </article>

          <article className="project-card">
            <div className="card-icon">◉</div>

            <span>IoT · AUTOMATION</span>

            <h3>Smart Water Tank Automation</h3>

            <p>
              An automated water-level management system designed to control
              filling and reduce overflow through IoT-based monitoring.
            </p>

            <div className="tags">
              <span>IoT</span>
              <span>Automation</span>
              <span>Monitoring</span>
            </div>
          </article>
        </div>

        {/* Cybersecurity */}
        <div className="security-section">
          <div className="security-heading">
            <p className="small-label">PRACTICAL SECURITY WORK</p>

            <h3>
              Cybersecurity
              <em> in practice.</em>
            </h3>
          </div>

          <div className="security-items">
            <div className="security-item">
              <span>Mobile Security</span>

              <h4>Mobile Application Penetration Testing</h4>

              <p>
                Practical testing and analysis of mobile applications in
                controlled environments.
              </p>
            </div>

            <div className="security-item">
              <span>Web Security</span>

              <h4>Web Application VAPT</h4>

              <p>
                Hands-on vulnerability assessment and penetration testing using
                security tools and labs.
              </p>
            </div>

            <div className="security-item">
              <span>Security Labs</span>

              <h4>TryHackMe Practice</h4>

              <p>
                Practical cybersecurity challenges covering security concepts,
                tools, analysis, and problem solving.
              </p>
            </div>

            <div className="security-item">
              <span>Research Project</span>

              <h4>Keylogging & Security Monitoring</h4>

              <p>
                A controlled research project exploring event monitoring,
                logging, and security-analysis concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Business */}
        <div className="business-work">
          <div>
            <p className="small-label">BEYOND TECHNICAL WORK</p>

            <h3>
              Business &<em> Entrepreneurship.</em>
            </h3>
          </div>

          <p>
            Project-based work exploring startup ideas, digital marketing,
            business development, entrepreneurship, and practical approaches to
            turning ideas into solutions.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="section education" id="education">
        <div className="section-label">
          <span>Education</span>
        </div>

        <div className="education-layout">
          <div>
            <p className="small-label">ACADEMIC BACKGROUND</p>

            <h2>
              Building the
              <em>foundation.</em>
            </h2>
          </div>

          <div className="education-card">
            <span>B.TECH · COMPUTER SCIENCE & ENGINEERING</span>

            <h3>Visvesvaraya Technological University</h3>

            <p>Belagavi, Karnataka</p>

            <div className="education-bottom">
              <span>Graduated 2026</span>
              <span>VTU</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills" id="skills">
        <div className="section-label">
          <span>Capabilities</span>
        </div>

        <div className="skills-layout">
          <div>
            <p className="small-label">WHAT I WORK WITH</p>

            <h2>
              Skills &<em>interests.</em>
            </h2>
          </div>

          <div className="skills-content">
            <div className="skill-group">
              <span>PROGRAMMING</span>

              <p>Python · JavaScript · Programming Fundamentals</p>
            </div>

            <div className="skill-group">
              <span>DEVELOPMENT</span>

              <p>React · Vite · Flask · Web Development</p>
            </div>

            <div className="skill-group">
              <span>CYBERSECURITY</span>

              <p>
                Burp Suite · Nmap · Wireshark · Metasploit · Nikto · CyberChef ·
                Autopsy
              </p>
            </div>

            <div className="skill-group">
              <span>TECHNOLOGY</span>

              <p>AI / Computer Vision · IoT · Automation · Problem Solving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section certifications" id="certifications">
        <div className="section-label">
          <span>Certifications</span>
        </div>

        <div className="certifications-heading">
          <div>
            <p className="small-label">LEARNING & PROFESSIONAL DEVELOPMENT</p>

            <h2>
              Training that
              <em>shaped my skills.</em>
            </h2>
          </div>

          <p>
            Selected cybersecurity certifications and practical training
            programs completed through online learning, workshops, and technical
            training.
          </p>
        </div>

        <div className="certification-list">
          <article className="certification-card">
            <div className="certification-mark">CS</div>

            <div className="certification-content">
              <span>CYBERSECURITY · ONLINE</span>

              <h3>CyberSmart</h3>

              <p>
                21-day online cybersecurity course covering foundational
                security concepts and practical learning.
              </p>
            </div>

            <div className="certification-status">CERTIFIED</div>
          </article>

          <article className="certification-card">
            <div className="certification-mark">CY</div>

            <div className="certification-content">
              <span>CYBERSECURITY</span>

              <h3>Cybersecurity Certification</h3>

              <p>
                Professional cybersecurity learning and practical exposure
                focused on core security concepts and applied skills.
              </p>
            </div>

            <div className="certification-status">CERTIFIED</div>
          </article>

          <article className="certification-card">
            <div className="certification-mark">GT</div>

            <div className="certification-content">
              <span>GOVERNMENT TECHNICAL TRAINING</span>

              <h3>GTTC · Cybersecurity & Ethical Hacking</h3>

              <p>
                Practical training in cybersecurity and ethical hacking,
                including hands-on security concepts and tools.
              </p>
            </div>

            <div className="certification-status">CERTIFIED</div>
          </article>

          <article className="certification-card">
            <div className="certification-mark">CS</div>

            <div className="certification-content">
              <span>CYBERSECURITY · WORKSHOP</span>

              <h3>CySeck Finishing School Program</h3>

              <p>
                21-day cybersecurity finishing school focused on practical
                learning, security concepts, tools, and hands-on exercises.
              </p>
            </div>

            <div className="certification-status">CERTIFIED</div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact-glow"></div>

        <p className="small-label">LET'S CONNECT</p>

        <h2>
          Have an opportunity
          <br />
          <em>worth exploring?</em>
        </h2>

        <p className="contact-text">
          Open to opportunities in software development, programming,
          cybersecurity, technology, and advanced academic pursuits.
        </p>

        <div className="contact-links">
          <a
            href="mailto:syedasimrafatima12@gmail.com"
            className="contact-button"
          >
            Email Me
            <span>↗</span>
          </a>

          <a
            href="https://github.com/Simrafatima"
            className="contact-button secondary-contact"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>

          <a
            href="/resume.pdf"
            className="contact-button secondary-contact"
            download="Syeda_Simra_Fatima_Resume.pdf"
          >
            Download Resume
            <span>↓</span>
          </a>
        </div>

        <div className="footer-line"></div>

        <footer>
          <span>SYEDA SIMRA FATIMA</span>
          <span>COMPUTER SCIENCE ENGINEER</span>
        </footer>
      </section>
    </div>
  );
}

export default App;
