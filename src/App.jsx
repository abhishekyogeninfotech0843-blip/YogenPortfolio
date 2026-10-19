import { useState } from "react";
import "./App.css";

const STORAGE_KEY = "yogen-portfolio-projects-v1";
const THEME_STORAGE_KEY = "yogen-portfolio-theme-v1";

const initialProjects = [
  {
    id: "seed-01",
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
    id: "seed-02",
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
    id: "seed-03",
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
    id: "seed-04",
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
    id: "seed-05",
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

const emptyProjectForm = {
  name: "",
  category: "",
  description: "",
  tech: "",
  icon: "",
  demo: "",
  github: "",
};

function loadProjects() {
  try {
    const savedProjects = window.localStorage.getItem(STORAGE_KEY);
    if (savedProjects === null) {
      return {
        projects: initialProjects,
        storageMessage: "Projects are saved in this browser.",
      };
    }

    const parsedProjects = JSON.parse(savedProjects);
    const isValid =
      Array.isArray(parsedProjects) &&
      parsedProjects.every(
        (project) =>
          project &&
          typeof project.id === "string" &&
          typeof project.name === "string" &&
          typeof project.category === "string" &&
          typeof project.description === "string" &&
          Array.isArray(project.tech) &&
          typeof project.icon === "string" &&
          typeof project.color === "string" &&
          typeof project.demo === "string" &&
          typeof project.github === "string",
      );

    if (!isValid) throw new Error("Saved projects have an invalid format.");
    return {
      projects: parsedProjects,
      storageMessage: "Projects are saved in this browser.",
    };
  } catch (error) {
    console.error("Could not load saved portfolio projects.", error);
    return {
      projects: initialProjects,
      storageMessage: "Could not load saved projects from this browser.",
    };
  }
}

function saveProjects(projects) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return "Projects are saved in this browser.";
  } catch (error) {
    console.error("Could not save portfolio projects.", error);
    return "Could not save projects in this browser. Check your browser storage settings.";
  }
}

function loadTheme() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "light" ? "light" : "dark";
  } catch (error) {
    console.error("Could not load the saved portfolio theme.", error);
    return "dark";
  }
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error("Could not save the portfolio theme.", error);
  }
}

function normalizeProjectUrl(value) {
  const trimmedValue = value.trim();
  if (!trimmedValue) return "";

  const url = new URL(
    /^https?:\/\//i.test(trimmedValue)
      ? trimmedValue
      : `https://${trimmedValue}`,
  );
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("Project links must use http or https.");
  }
  return url.href;
}

function App() {
  const [projectState, setProjectState] = useState(loadProjects);
  const [theme, setTheme] = useState(loadTheme);
  const { projects, storageMessage } = projectState;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState(emptyProjectForm);
  const [formError, setFormError] = useState("");

  function handleThemeToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  }

  function handleAddProject(event) {
    event.preventDefault();
    setFormError("");

    try {
      const name = form.name.trim();
      if (!name) {
        setFormError("Enter a project name.");
        return;
      }

      const demo = normalizeProjectUrl(form.demo);
      const github = normalizeProjectUrl(form.github);
      if (!demo && !github) {
        setFormError("Add at least one project link or GitHub link.");
        return;
      }

      const colors = ["purple", "blue", "green", "orange", "pink"];
      const newProject = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name,
        category: form.category.trim() || "Personal Project",
        description: form.description.trim() || "A project built by me.",
        tech: form.tech
          .split(",")
          .map((technology) => technology.trim())
          .filter(Boolean),
        icon: form.icon.trim() || "🚀",
        color: colors[projects.length % colors.length],
        demo,
        github,
      };

      const updatedProjects = [...projects, newProject];
      setProjectState({
        projects: updatedProjects,
        storageMessage: saveProjects(updatedProjects),
      });
      setForm(emptyProjectForm);
      setIsFormOpen(false);
    } catch {
      setFormError("Enter a valid project URL (for example, https://example.com).");
    }
  }

  function handleRemoveProject(project) {
    if (!window.confirm(`Remove "${project.name}" from your portfolio?`)) return;
    const updatedProjects = projects.filter((item) => item.id !== project.id);
    setProjectState({
      projects: updatedProjects,
      storageMessage: saveProjects(updatedProjects),
    });
  }

  return (
    <div className="portfolio" data-theme={theme}>
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

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
          <a className="nav-button" href="#projects">
            Explore Work ↗
          </a>
        </div>
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
                <strong>{String(projects.length).padStart(2, "0")}</strong>
                <span>Projects</span>
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
                  <span className="code-orange">{projects.length}</span>
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
            <div className="project-heading-actions">
              <span className="project-count">
                {projects.length} {projects.length === 1 ? "PROJECT" : "PROJECTS"}
              </span>
              <button
                className="add-project-button"
                type="button"
                aria-expanded={isFormOpen}
                aria-controls="add-project-form"
                onClick={() => {
                  setIsFormOpen((isOpen) => !isOpen);
                  setFormError("");
                }}
              >
                {isFormOpen ? "Cancel" : "+ Add project"}
              </button>
            </div>
          </div>

          {isFormOpen && (
            <form
              className="project-form"
              id="add-project-form"
              onSubmit={handleAddProject}
            >
              <div className="project-form-heading">
                <h3>Add a project</h3>
                <p>Fill in the project details and add at least one working link.</p>
              </div>
              <div className="project-form-grid">
                <label>
                  Project name *
                  <input
                    autoComplete="off"
                    required
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    placeholder="My awesome project"
                  />
                </label>
                <label>
                  Category
                  <input
                    value={form.category}
                    onChange={(event) =>
                      setForm({ ...form, category: event.target.value })
                    }
                    placeholder="Web app, portfolio..."
                  />
                </label>
                <label className="project-form-wide">
                  Description
                  <textarea
                    rows="3"
                    value={form.description}
                    onChange={(event) =>
                      setForm({ ...form, description: event.target.value })
                    }
                    placeholder="What does your project do?"
                  />
                </label>
                <label>
                  Technologies
                  <input
                    value={form.tech}
                    onChange={(event) =>
                      setForm({ ...form, tech: event.target.value })
                    }
                    placeholder="React, CSS, Node.js"
                  />
                  <small>Separate technologies with commas.</small>
                </label>
                <label>
                  Icon / emoji
                  <input
                    value={form.icon}
                    onChange={(event) =>
                      setForm({ ...form, icon: event.target.value })
                    }
                    placeholder="🚀"
                  />
                </label>
                <label>
                  Project link
                  <input
                    inputMode="url"
                    value={form.demo}
                    onChange={(event) =>
                      setForm({ ...form, demo: event.target.value })
                    }
                    placeholder="https://your-project.com"
                  />
                </label>
                <label>
                  GitHub link
                  <input
                    inputMode="url"
                    value={form.github}
                    onChange={(event) =>
                      setForm({ ...form, github: event.target.value })
                    }
                    placeholder="https://github.com/you/project"
                  />
                </label>
              </div>
              {formError && (
                <p className="project-form-error" role="alert">
                  {formError}
                </p>
              )}
              <div className="project-form-footer">
                <p>{storageMessage}</p>
                <button className="primary-button" type="submit">
                  Save project
                </button>
              </div>
            </form>
          )}

          {projects.length > 0 ? (
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.id}>
                  <div className={`project-art ${project.color}`}>
                    <span className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
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
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live Demo ↗
                        </a>
                      )}
                      {!project.demo && !project.github && (
                        <span className="coming-soon">Demo link coming soon</span>
                      )}

                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          GitHub ↗
                        </a>
                      )}
                    </div>
                    <button
                      className="remove-project-button"
                      type="button"
                      onClick={() => handleRemoveProject(project)}
                      aria-label={`Remove ${project.name}`}
                    >
                      Remove project
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-projects">
              <span aria-hidden="true">✦</span>
              <h3>No projects added yet</h3>
              <p>Choose “Add project” to add your first project and its link.</p>
            </div>
          )}

          <p className="project-note" aria-live="polite">
            Review the sample cards and remove any work you have not built.
            {` ${storageMessage} `}
            Changes are stored only in this browser and will not update the live
            website for other visitors.
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
