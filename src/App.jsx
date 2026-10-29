const skills = [
  { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Database", items: ["MySQL", "MongoDB"] },
  { category: "Mobile", items: ["React Native", "Expo"] },
  { category: "UI / UX", items: ["Figma"] },
  { category: "Tools & deployment", items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"] },
];

const experience = [
  "Developed responsive web applications using React.js, JavaScript, HTML5, and CSS3.",
  "Turned Figma designs into responsive, reusable React components.",
  "Developed and integrated REST APIs using Node.js and Express.js.",
  "Worked with MySQL for database operations and data management.",
  "Contributed across User, Admin, and Vendor modules for the ORGOS white-label platform.",
  "Tested APIs, debugged issues, and delivered features and UI improvements using Git, GitHub, and Postman.",
];

const project = [
  "Built a white-label platform with User, Admin, and Vendor modules.",
  "Created responsive React interfaces from Figma designs.",
  "Developed REST APIs using Node.js and Express.js.",
  "Implemented product, inventory, vendor, and category management with MySQL.",
  "Contributed to the React Native / Expo app and API integration.",
];

const projectStack = [
  "React.js", "JavaScript", "Node.js", "Express.js", "MySQL",
  "React Native", "Expo", "Figma", "Git", "Postman",
];

function SectionHeading({ number, eyebrow, title, accent }) {
  return (
    <div className="portfolio-section-heading">
      <p className="portfolio-eyebrow">
        <span>{number}</span>
        {eyebrow}
      </p>
      <h2>
        {title} {accent && <span>{accent}</span>}
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <a className="portfolio-logo" href="#home" aria-label="Ritvik Chandrikapure home">
          RC<span>.</span>
        </a>
        <nav className="portfolio-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#project">Project</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </nav>
        <a className="portfolio-header-link" href="mailto:ritvikchandrikapure@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="portfolio-hero" id="home">
          <div className="portfolio-hero-copy">
            <p className="portfolio-eyebrow portfolio-role">
              <span className="portfolio-live-dot" />
              Junior Software Developer
            </p>
            <h1>
              Ritvik
              <br />
              <span>Chandrikapure.</span>
            </h1>
            <p className="portfolio-hero-description">
              I build thoughtful web and mobile experiences with the MERN stack,
              from responsive interfaces to reliable APIs.
            </p>
            <div className="portfolio-hero-actions">
              <a className="portfolio-button portfolio-button-primary" href="#project">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a className="portfolio-button portfolio-button-light" href="mailto:ritvikchandrikapure@gmail.com">
                Get in touch
              </a>
            </div>
            <div className="portfolio-hero-meta">
              <span>Based in Nagpur, Maharashtra</span>
              <span>Available for opportunities</span>
            </div>
          </div>

          <aside className="portfolio-profile-card" aria-label="Contact information">
            <div className="portfolio-profile-top">
              <span className="portfolio-profile-monogram">RC</span>
              <span className="portfolio-profile-status">
                <span className="portfolio-live-dot" />
                Open to work
              </span>
            </div>
            <p className="portfolio-profile-label">LET&apos;S CONNECT</p>
            <h2>Have a good project in mind?</h2>
            <p className="portfolio-profile-copy">
              I&apos;m always interested in meaningful work and new challenges.
            </p>
            <div className="portfolio-profile-links">
              <a href="tel:+918975585801">
                <span>Phone</span>
                <strong>+91 8975585801</strong>
                <span className="portfolio-link-arrow" aria-hidden="true">↗</span>
              </a>
              <a href="mailto:ritvikchandrikapure@gmail.com">
                <span>Email</span>
                <strong>ritvikchandrikapure@gmail.com</strong>
                <span className="portfolio-link-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ritvikchandrikapure"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
                <span className="portfolio-link-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
          <span className="portfolio-hero-orbit" aria-hidden="true" />
        </section>

        <section className="portfolio-section portfolio-about" id="about">
          <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title="Curious by nature." accent="Developer by craft." />
          <div className="portfolio-about-copy">
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

        <section className="portfolio-section" id="experience">
          <SectionHeading number="02" eyebrow="EXPERIENCE" title="Building things" accent="that work." />
          <article className="portfolio-experience-card">
            <div className="portfolio-experience-heading">
              <div>
                <p className="portfolio-card-kicker">CURRENT ROLE</p>
                <h3>Junior Software Developer</h3>
                <p className="portfolio-company">Axiom TechGuru Pvt. Ltd</p>
              </div>
              <div className="portfolio-role-meta">
                <span>Jan 2026 – Present</span>
                <span className="portfolio-onsite">On-site</span>
              </div>
            </div>
            <ul className="portfolio-bullet-list">
              {experience.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </section>

        <section className="portfolio-section portfolio-project-section" id="project">
          <SectionHeading number="03" eyebrow="SELECTED PROJECT" title="A platform built" accent="for real workflows." />
          <article className="portfolio-project-card">
            <div className="portfolio-project-banner">
              <div className="portfolio-project-title">
                <span className="portfolio-project-label">FULL-STACK PROJECT · AXIOM TECHGURU</span>
                <h3>ORGOS<span>.</span></h3>
                <p>White-Label E-Commerce &amp; Management Platform</p>
              </div>
              <div className="portfolio-project-mark" aria-hidden="true">
                <span>O</span>
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="portfolio-project-details">
              <div>
                <p className="portfolio-card-kicker">WHAT I CONTRIBUTED</p>
                <ul className="portfolio-bullet-list">
                  {project.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="portfolio-stack">
                <p className="portfolio-card-kicker">TECHNOLOGY</p>
                <div className="portfolio-chip-list">
                  {projectStack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="portfolio-section" id="skills">
          <SectionHeading number="04" eyebrow="TECHNICAL SKILLS" title="Tools for the" accent="whole stack." />
          <div className="portfolio-skills-grid">
            {skills.map(({ category, items }, index) => (
              <article className="portfolio-skill-card" key={category}>
                <span className="portfolio-skill-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{category}</h3>
                <div className="portfolio-chip-list">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="education">
          <SectionHeading number="05" eyebrow="EDUCATION" title="The foundations" accent="behind the work." />
          <div className="portfolio-education-list">
            <article className="portfolio-education-card">
              <span className="portfolio-education-date">Aug 2022 — Oct 2024</span>
              <div>
                <h3>Master of Computer Application <span>(MCA)</span></h3>
                <p>Ranibai Agnihotri Institute of Computer Science &amp; Information Technology</p>
              </div>
              <strong>7.30 <small>CGPA</small></strong>
            </article>
            <article className="portfolio-education-card">
              <span className="portfolio-education-date">July 2019 — Sep 2021</span>
              <div>
                <h3>Bachelor of Science <span>in PCM</span></h3>
                <p>DRB Sindhu Mahavidyalaya</p>
              </div>
              <strong>61.81<small>%</small></strong>
            </article>
          </div>
        </section>

        <section className="portfolio-contact" id="contact">
          <div>
            <p className="portfolio-eyebrow">06 / CONTACT</p>
            <h2>Have an idea?<br /><span>Let&apos;s make it real.</span></h2>
            <p className="portfolio-contact-copy">
              Available for opportunities, collaborations, and challenging projects.
            </p>
          </div>
          <a className="portfolio-contact-cta" href="mailto:ritvikchandrikapure@gmail.com">
            <span>Start a conversation</span>
            <strong>ritvikchandrikapure@gmail.com</strong>
            <span className="portfolio-contact-arrow" aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="portfolio-footer">
        <a className="portfolio-logo" href="#home">RC<span>.</span></a>
        <span>© 2026 Ritvik Chandrikapure</span>
        <span>Nagpur, Maharashtra</span>
      </footer>
    </div>
  );
}

export default App;
