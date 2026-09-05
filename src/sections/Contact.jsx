import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Contact() {

  const section = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".contact-word", {

        scrollTrigger: {
          trigger: section.current,
          start: "top 70%"
        },

        yPercent: 100,

        opacity: 0,

        duration: 1,

        stagger: 0.1,

        ease: "power4.out"

      });


    }, section);


    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={section}
      id="contact"
      className="contact section"
    >

      <div className="section-label">
        06 / CONTACT
      </div>


      <div className="contact-heading">

        <span className="contact-word">
          HAVE
        </span>

        <span className="contact-word">
          AN
        </span>

        <span className="contact-word contact-outline">
          IDEA?
        </span>

      </div>


      <p className="contact-description">

        I'm always interested in new
        opportunities, collaborations and
        challenging projects.

      </p>


      <a
        href="mailto:ritvikchandrikapure@gmail.com"
        className="contact-email"
      >

        ritvikchandrikapure@gmail.com

        <span>↗</span>

      </a>


      <div className="contact-details">

        <a href="tel:+918975585801">
          +91 8975585801
        </a>

        <span>
          NAGPUR, INDIA
        </span>

      </div>

    </section>

  );
}


export default Contact;