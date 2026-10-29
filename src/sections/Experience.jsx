import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Experience() {

  const section = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".experience-line", {

        scrollTrigger: {
          trigger: section.current,
          start: "top 70%"
        },

        scaleY: 0,

        transformOrigin: "top",

        duration: 1.5,

        ease: "power3.inOut"

      });


      gsap.from(".experience-content", {

        scrollTrigger: {
          trigger: section.current,
          start: "top 65%"
        },

        x: 100,

        opacity: 0,

        duration: 1,

        ease: "power3.out"

      });

    }, section);


    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={section}
      id="experience"
      className="experience section"
    >

      <div className="section-label">
        03 / EXPERIENCE
      </div>


      <div className="experience-wrapper">

        <div className="experience-year">
          2024
        </div>


        <div className="experience-line" />


        <div className="experience-content">

          <div className="experience-header">

            <span>
              SOFTWARE DEVELOPMENT INTERN
            </span>

            <span>
              JAN — JUN
            </span>

          </div>


          <h2>
            MSIT SERVICES-CMS
          </h2>


          <p>

            Developed a live face detection
            system using OpenCV for real-time
            facial recognition.

          </p>


          <p>

            Optimized computer vision
            algorithms to improve accuracy
            and processing speed.

          </p>


          <div className="tech-row">

            <span>PYTHON</span>

            <span>OPENCV</span>

            <span>COMPUTER VISION</span>

          </div>

        </div>

      </div>

    </section>

  );
}


export default Experience;