import "./App.css";

const projects = [
  {
    number: "01",
    name: "YogenBilling",
    category: "Billing & Invoicing",
    description:
      "A software billing application for creating invoices, adding multiple items, calculating GST and managing recent invoices.",
    tech: ["React", "Vite", "CSS"],
    icon: "🧾",
    color: "purple",
    demo: "",
    github: "",
  },
  {
    number: "02",
    name: "Yogen Office OS",
    category: "Office Management",
    description:
      "An office management system designed for employee records, attendance, salary and office expenses.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: "🏢",
    color: "blue",
    demo: "",
    github: "",
  },
  {
    number: "03",
    name: "YogenFlow CRM",
    category: "Customer Management",
    description:
      "A CRM concept for organizing clients, projects, invoices, tasks and support tickets in one place.",
    tech: ["React", "Express", "MongoDB"],
    icon: "📊",
    color: "green",
    demo: "",
    github: "",
  },
  {
    number: "04",
    name: "Yogen Tools",
    category: "Online Productivity Tools",
    description:
      "A collection of useful tools including PDF conversion, resume building, QR code generation and text-to-speech.",
    tech: ["React", "JavaScript", "CSS"],
    icon: "🧰",
    color: "orange",
    demo: "",
    github: "",
  },
  {
    number: "05",
    name: "Wedding Invitation",
    category: "Creative Web Experience",
    description:
      "A planned royal red and gold wedding invitation website with animated palace doors, event details and RSVP.",
    tech: ["React", "CSS", "Animation"],
    icon: "💍",
    color: "pink",
    demo: "",
    github: "",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">Y</span>
          <span>
            Yogen<span className="logo-light">Portfolio</span>
          </span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#projects">
          Explore Work ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              DEVELOPER PORTFOLIO
            </div>

            <p className="eyebrow">HELLO, WELCOME TO MY WORLD</p>

            <h1>
              Turning ideas into
              <br />
              <span>digital experiences.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>Abhishek Chauhan</strong>. I build websites,
              software applications and useful digital products. Explore my
              projects and see what I create.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Projects <span>↗</span>
              </a>
              <a href="#about" className="secondary-button">
                About Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>05</strong>
                <span>Project Slots</span>
              </div>
              <div>
                <strong>React</strong>
                <span>Frontend</span>
              </div>
              <div>
                <strong>Yogen</strong>
                <span>Creative Work</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="glow"></div>

            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>developer.js</span>
                <span>✳</span>
              </div>

              <div className="code-body">
                <p>
                  <span className="line-number">01</span>{" "}
                  <span className="code-purple">const</span> developer = {"{"}
                </p>
                <p>
                  <span className="line-number">02</span> &nbsp; name:{" "}
                  <span className="code-green">"Abhishek"</span>,
                </p>
                <p>
                  <span className="line-number">03</span> &nbsp; brand:{" "}
                  <span className="code-green">"Yogen"</span>,
                </p>
                <p>
                  <span className="line-number">04</span> &nbsp; passion:{" "}
                  <span className="code-green">"Building"</span>,
                </p>
                <p>
                  <span className="line-number">05</span> &nbsp; creative:{" "}
                  <span className="code-orange">true</span>,
                </p>
                <p>
                  <span className="line-number">06</span> &nbsp; projects:{" "}
                  <span className="code-orange">5</span>
                </p>
                <p>
                  <span className="line-number">07</span> {"}"};
                </p>
                <p className="code-comment">// Let's build something great!</p>
              </div>
            </div>

            <div className="floating-card card-top">
              <span>✦</span>
              <div>
                <strong>Creative</strong>
                <small>Ideas into reality</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span>⌘</span>
              <div>
                <strong>My Workspace</strong>
                <small>Design · Code · Create</small>
              </div>
            </div>
          </div>

          <a href="#projects" className="scroll-hint">
            SCROLL TO EXPLORE ↓
          </a>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Building things that <span>matter.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-card about-main">
              <span className="about-symbol">✳</span>
              <h3>Hey, I'm Abhishek.</h3>
              <p>
                I'm learning and building digital solutions with a focus on
                practical software, clean design and useful user experiences.
                This portfolio brings my work together in one place.
              </p>
            </div>

            <div className="about-card">
              <span className="skill-icon">⌨</span>
              <h3>Development</h3>
              <p>React, JavaScript, HTML and CSS.</p>
            </div>

            <div className="about-card">
              <span className="skill-icon">✧</span>
              <h3>My Approach</h3>
              <p>Learn, build, improve and deliver useful projects.</p>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>
                Projects I've <span>worked on.</span>
              </h2>
              <p className="section-description">
                A collection of software, tools and creative web experiences.
              </p>
            </div>
            <span className="project-count">01 — 05</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.color}`}>
                  <span className="project-number">{project.number}</span>
                  <div className="project-icon">{project.icon}</div>
                  <span className="art-orbit"></span>
                  <span className="art-orbit orbit-small"></span>
                </div>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo ↗
                      </a>
                    ) : (
                      <span className="coming-soon">Demo link coming soon</span>
                    )}

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="project-note">
            Some project descriptions represent planned work. Add your verified
            live website and GitHub links before sharing this portfolio with
            clients.
          </p>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-box">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let's create something <span>great.</span>
            </h2>
            <p>
              Have an idea for a website or software application? Let's connect.
            </p>
            <a
              className="primary-button"
              href="mailto:YOUR_EMAIL@example.com?subject=Project%20Enquiry"
            >
              Get In Touch ↗
            </a>
            <small>
              Replace the sample email with your real contact email.
            </small>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          <span className="logo-icon">Y</span>
          <span>
            Yogen<span className="logo-light">Portfolio</span>
          </span>
        </a>
        <p>Designed with curiosity. Built with code.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
