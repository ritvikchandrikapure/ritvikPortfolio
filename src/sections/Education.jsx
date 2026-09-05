import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const education = [

  {
    degree: "MCA",
    institute:
      "Ranibai Agnihotri Institute of Computer Science & Information Technology",
    result: "CGPA 7.30",
    year: "2024"
  },

  {
    degree: "BSC (PCM)",
    institute:
      "DRB Sindhu Mahavidyalaya",
    result: "61.81%",
    year: "2021"
  },

  {
    degree: "XII — SCIENCE",
    institute:
      "DRB Sindhu Mahavidyalaya",
    result: "65.08%",
    year: "2018"
  },

  {
    degree: "X",
    institute:
      "Rajkumar Kewalramani High School",
    result: "76.20%",
    year: "2016"
  }

];


function Education() {

  const section = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".education-row", {

        scrollTrigger: {
          trigger: section.current,
          start: "top 75%"
        },

        x: -100,

        opacity: 0,

        duration: 0.8,

        stagger: 0.15,

        ease: "power3.out"

      });

    }, section);


    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={section}
      className="education section"
    >

      <div className="section-label">
        05 / EDUCATION
      </div>


      <h2 className="education-heading">

        THE
        <span> FOUNDATION.</span>

      </h2>


      <div className="education-list">

        {education.map((item, index) => (

          <div
            className="education-row"
            key={item.degree}
          >

            <span>
              0{index + 1}
            </span>


            <div>

              <h3>
                {item.degree}
              </h3>

              <p>
                {item.institute}
              </p>

            </div>


            <strong>
              {item.result}
            </strong>


            <span>
              {item.year}
            </span>

          </div>

        ))}

      </div>

    </section>

  );
}


export default Education;