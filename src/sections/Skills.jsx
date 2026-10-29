const skills = [

  {
    number: "01",
    title: "FRONTEND",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Redux"
    ]
  },

  {
    number: "02",
    title: "BACKEND",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT"
    ]
  },

  {
    number: "03",
    title: "DATABASE",
    items: [
      "MongoDB",
      "MySQL",
      "CRUD",
    ]
  },

  {
    number: "04",
    title: "OTHER",
    items: [
      
      "Git and GitHub",
      "Problem Solving",
      "vercel",
      "Netlify",
    ]
  }

];


function Skills() {
  return (

    <section
      id="skills"
      className="skills section"
    >

      <div className="section-label">
        02 / SKILLS
      </div>


      <div className="skills-heading">

        <h2>
          MY
          <span> TOOLKIT.</span>
        </h2>

      </div>


      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.number}
          >

            <div className="skill-top">

              <span>
                {skill.number}
              </span>

              <span>
                ↗
              </span>

            </div>


            <h3>
              {skill.title}
            </h3>


            <div className="skill-items">

              {skill.items.map((item) => (

                <span key={item}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}


export default Skills;