import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function About() {

  const section = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".about-label", {
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      });


      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: section.current,
          start: "top 70%"
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });


      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: section.current,
          start: "top 65%"
        },
        y: 50,
        opacity: 0,
        duration: 1
      });

    }, section);


    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={section}
      id="about"
      className="about section"
    >

      <div className="section-label about-label">
        01 / ABOUT ME
      </div>


      <div className="about-layout">

        <h2 className="about-heading">

          I TURN
          <span> IDEAS </span>
          INTO
          <span> DIGITAL </span>
          EXPERIENCES.

        </h2>


        <div className="about-side">

          <p className="about-text">

            I'm Ritvik Chandrikapure,
            a Full Stack Web Development
            fresher passionate about building
            clean, scalable and interactive
            web applications.

          </p>


          <div className="about-tags">

            <span>REACT.JS</span>

            <span>NODE.JS</span>

            <span>EXPRESS.JS</span>

            <span>MONGODB</span>

          </div>

        </div>

      </div>

    </section>

  );
}


export default About;