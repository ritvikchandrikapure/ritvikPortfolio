import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "ONLINE FITNESS CENTRE",
    type: "FULL STACK / MERN",
    description:
      "A subscription-based fitness platform with authentication, protected video content and membership access control.",
    tech: ["React", "Node", "Express", "MongoDB", "JWT"],
  },

  {
    number: "02",
    title: "FACE DETECTION",
    type: "COMPUTER VISION",
    description:
      "A real-time face detection system developed using Python and OpenCV with focus on detection accuracy and processing speed.",
    tech: ["Python", "OpenCV", "Computer Vision"],
  },

  {
    number: "03",
    title: "FUTURE PROJECT",
    type: "FULL STACK",
    description:
      "A new full-stack project will be added here as the next major build.",
    tech: ["React", "Node", "API"],
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;

      const getDistance = () =>
        track.scrollWidth - window.innerWidth;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${Math.max(getDistance(), 1)}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.from(".project-horizontal-card", {
        opacity: 0,
        y: 100,
        stagger: 0.2,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="horizontal-project-section"
    >
      <div className="horizontal-project-header">
        <div className="section-label">
          04 / SELECTED WORK
        </div>

        <h2>
          SELECTED
          <span> WORK.</span>
        </h2>

        <p>
          SCROLL TO EXPLORE →
        </p>
      </div>

      <div
        ref={trackRef}
        className="projects-track"
      >
        {projects.map((project) => (
          <article
            className="project-horizontal-card"
            key={project.number}
          >
            <div className="project-card-number">
              {project.number}
            </div>

            <div className="project-card-visual">
              <div className="project-glow" />

              <span>
                {project.type}
              </span>

              <strong>
                {project.number}
              </strong>
            </div>

            <div className="project-card-content">
              <span className="project-type">
                {project.type}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <button>
                VIEW PROJECT ↗
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;