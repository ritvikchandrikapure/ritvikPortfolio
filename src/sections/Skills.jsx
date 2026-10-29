<<<<<<< HEAD
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


=======
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
const skills = [

  {
    number: "01",
    title: "FRONTEND",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
<<<<<<< HEAD
      "React.js"
=======
      "React.js",
      "Redux"
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
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
<<<<<<< HEAD
      "Data Modeling",
      "CRUD",
      "Authentication"
=======
      "MySQL",
      "CRUD",
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
    ]
  },

  {
    number: "04",
    title: "OTHER",
    items: [
<<<<<<< HEAD
      "Python",
      "OpenCV",
      "Git",
      "Problem Solving"
=======
      
      "Git and GitHub",
      "Problem Solving",
      "vercel",
      "Netlify",
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
    ]
  }

];


function Skills() {
<<<<<<< HEAD

  const section = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".skill-card", {

        scrollTrigger: {
          trigger: section.current,
          start: "top 75%"
        },

        opacity: 0,

        duration: 0.9,

        stagger: 0.12,

        ease: "power4.out"

      });


    }, section);


    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={section}
=======
  return (

    <section
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
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