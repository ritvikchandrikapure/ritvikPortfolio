<<<<<<< HEAD
const skills = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Design",
    items: ["Figma"],
  },
  {
    category: "Tools & deployment",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
  },
];

const experienceHighlights = [
  "Developed responsive web applications using React.js, JavaScript, HTML5, and CSS3.",
  "Converted Figma UI/UX designs into responsive, reusable React components.",
  "Developed and integrated REST APIs using Node.js and Express.js.",
  "Worked with MySQL for database operations and data management.",
  "Contributed to the ORGOS white-label platform across User, Admin, and Vendor modules.",
  "Handled API testing, debugging, feature implementation, and UI improvements with Git, GitHub, and Postman.",
];

const projectHighlights = [
  "Built a white-label platform with dedicated User, Admin, and Vendor modules.",
  "Created responsive web interfaces in React.js from Figma designs.",
  "Developed REST APIs with Node.js and Express.js.",
  "Worked on product, inventory, vendor, and category management using MySQL.",
  "Contributed to the React Native and Expo mobile app, including API integration.",
];

function App() {
  return (
    <div className="resume-site">
      <header className="resume-header">
        <a className="resume-brand" href="#home" aria-label="Ritvik Chandrikapure home">
          RC<span>.</span>
        </a>

        <nav className="resume-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#project">Project</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </nav>

        <a className="resume-header-cta" href="mailto:ritvikchandrikapure@gmail.com">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="resume-hero" id="home">
          <div className="resume-hero-copy">
            <p className="resume-eyebrow">
              <span className="resume-status-dot" />
              JUNIOR SOFTWARE DEVELOPER
            </p>
            <h1>
              Ritvik
              <br />
              <span>Chandrikapure.</span>
            </h1>
            <p className="resume-intro">
              MERN Stack Developer building responsive web and mobile
              applications, practical APIs, and clean interfaces from Figma
              designs.
            </p>
            <div className="resume-hero-actions">
              <a className="resume-button resume-button-primary" href="#project">
                View my work <span aria-hidden="true">↘</span>
              </a>
              <a className="resume-button resume-button-secondary" href="mailto:ritvikchandrikapure@gmail.com">
                Contact me
              </a>
            </div>
          </div>

          <aside className="resume-contact-card" aria-label="Contact details">
            <p className="resume-card-label">CONTACT DETAILS</p>
            <a href="tel:+918975585801">
              <span>Phone</span>
              +91 8975585801
            </a>
            <a href="mailto:ritvikchandrikapure@gmail.com">
              <span>Email</span>
              ritvikchandrikapure@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ritvikchandrikapure"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              linkedin.com/in/ritvikchandrikapure
            </a>
            <div>
              <span>Location</span>
              Nagpur, Maharashtra
            </div>
            <div className="resume-availability">
              <span className="resume-status-dot" />
              Open to opportunities
            </div>
          </aside>
        </section>

        <section className="resume-section resume-about" id="about">
          <div className="resume-section-heading">
            <p className="resume-eyebrow">01 / ABOUT ME</p>
            <h2>A little about me.</h2>
          </div>
          <div className="resume-about-copy">
            <p>
              Passionate MERN Stack Developer with hands-on experience building
              full-stack web and mobile applications using React.js, JavaScript,
              Node.js, Express.js, MySQL, MongoDB, and React Native.
            </p>
            <p>
              Experienced in developing responsive interfaces from Figma
              designs, building REST APIs, integrating databases, and solving
              real-world technical problems.
            </p>
          </div>
        </section>

        <section className="resume-section" id="experience">
          <div className="resume-section-heading">
            <p className="resume-eyebrow">02 / EXPERIENCE</p>
            <h2>Where I work.</h2>
          </div>
          <article className="resume-entry">
            <div className="resume-entry-top">
              <div>
                <h3>Junior Software Developer</h3>
                <p className="resume-entry-company">Axiom TechGuru Pvt. Ltd</p>
              </div>
              <div className="resume-entry-meta">
                <span>Jan 2026 – Present</span>
                <span>On-site</span>
              </div>
            </div>
            <ul className="resume-bullet-list">
              {experienceHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="resume-section resume-project-section" id="project">
          <div className="resume-section-heading">
            <p className="resume-eyebrow">03 / SELECTED PROJECT</p>
            <h2>Work in progress.</h2>
          </div>
          <article className="resume-project-card">
            <div className="resume-project-top">
              <div>
                <p className="resume-project-type">FULL-STACK / MERN STACK</p>
                <h3>ORGOS</h3>
                <p className="resume-project-subtitle">
                  White-Label E-Commerce &amp; Management Platform
                </p>
              </div>
              <span className="resume-project-number">01</span>
            </div>
            <p className="resume-project-context">Axiom TechGuru Pvt. Ltd</p>
            <ul className="resume-bullet-list">
              {projectHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="resume-tech-list" aria-label="Project technology stack">
              {[
                "React.js",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MySQL",
                "React Native",
                "Expo",
                "Figma",
                "Git",
                "Postman",
              ].map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="resume-section" id="skills">
          <div className="resume-section-heading">
            <p className="resume-eyebrow">04 / TECHNICAL SKILLS</p>
            <h2>My toolkit.</h2>
          </div>
          <div className="resume-skills-grid">
            {skills.map(({ category, items }) => (
              <article className="resume-skill-card" key={category}>
                <h3>{category}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="education">
          <div className="resume-section-heading">
            <p className="resume-eyebrow">05 / EDUCATION</p>
            <h2>What I studied.</h2>
          </div>
          <div className="resume-education-list">
            <article className="resume-education-entry">
              <div className="resume-education-date">Aug 2022 – Oct 2024</div>
              <div>
                <h3>Master of Computer Application (MCA)</h3>
                <p>Ranibai Agnihotri Institute of Computer Science &amp; Information Technology</p>
              </div>
              <strong>7.30 CGPA</strong>
            </article>
            <article className="resume-education-entry">
              <div className="resume-education-date">July 2019 – Sep 2021</div>
              <div>
                <h3>Bachelor of Science in PCM</h3>
                <p>DRB Sindhu Mahavidyalaya</p>
              </div>
              <strong>61.81%</strong>
            </article>
          </div>
        </section>

        <section className="resume-contact-section" id="contact">
          <p className="resume-eyebrow">06 / CONTACT</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>Have a role, project, or idea in mind? I&apos;d be happy to hear from you.</p>
          <a className="resume-button resume-button-primary" href="mailto:ritvikchandrikapure@gmail.com">
            ritvikchandrikapure@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="resume-footer">
        <span>© 2026 Ritvik Chandrikapure</span>
        <span>Nagpur, Maharashtra</span>
      </footer>
    </div>
  );
}

export default App;
=======
import { useState } from "react";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Preloader
          onComplete={() => setLoading(false)}
        />
      )}

      <CustomCursor />

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Education />

        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
