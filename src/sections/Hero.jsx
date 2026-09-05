import { useEffect, useRef } from "react";
import gsap from "gsap";


function Hero() {

  const hero = useRef(null);
  const orb = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        delay: 2
      });


      tl.from(".hero-eyebrow", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });


      tl.from(".hero-word", {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out"
      }, "-=0.4");


      tl.from(".hero-description", {
        y: 40,
        opacity: 0,
        duration: 0.8
      }, "-=0.5");


      tl.from(".hero-actions", {
        y: 30,
        opacity: 0,
        duration: 0.7
      }, "-=0.4");


      const mouseMove = (e) => {

        const x =
          (e.clientX /
            window.innerWidth -
            0.5) * 2;


        const y =
          (e.clientY /
            window.innerHeight -
            0.5) * 2;


        gsap.to(orb.current, {
          x: x * 80,
          y: y * 80,
          duration: 1.2,
          ease: "power3.out"
        });


        gsap.to(".hero-grid", {
          x: x * 20,
          y: y * 20,
          duration: 1.5,
          ease: "power3.out"
        });

      };


      window.addEventListener(
        "mousemove",
        mouseMove
      );


      return () => {

        window.removeEventListener(
          "mousemove",
          mouseMove
        );

      };

    }, hero);


    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={hero}
      id="home"
      className="hero"
    >

      <div
        ref={orb}
        className="hero-orb"
      />


      <div className="hero-grid" />


      <div className="hero-content">

        <div className="hero-eyebrow">

          <span className="status-dot" />

          AVAILABLE FOR OPPORTUNITIES

          <span>
            / 2026
          </span>

        </div>


        <h1 className="hero-title">

          <span className="hero-word">
            FULL STACK
          </span>

          <span className="hero-word hero-outline">
            DEVELOPER.
          </span>

        </h1>


        <p className="hero-description">

          I build modern web applications
          that combine clean interfaces,
          scalable backend systems and
          meaningful user experiences.

        </p>


        <div className="hero-actions">

          <a
            href="#work"
            className="hero-primary"
          >
            EXPLORE MY WORK
            <span>↗</span>
          </a>


          <a
            href="#contact"
            className="hero-secondary"
          >
            LET'S CONNECT
          </a>

        </div>

      </div>


      <div className="hero-meta">

        <span>
          REACT / NODE / MONGODB
        </span>

        <span>
          SCROLL ↓
        </span>

        <span>
          NAGPUR / INDIA
        </span>

      </div>

    </section>

  );
}


export default Hero;