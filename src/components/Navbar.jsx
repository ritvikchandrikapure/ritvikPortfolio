import { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const nav = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    const navElement = nav.current;
    const buttonElement = button.current;

    if (!navElement || !buttonElement) {
      return;
    }

    const ctx = gsap.context(() => {
      // ================================
      // NAVBAR ENTRY ANIMATION
      // ================================

      gsap.from(".nav-element", {
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 2.1,
        ease: "power3.out",
      });

      // ================================
      // HIDE / SHOW NAVBAR ON SCROLL
      // ================================

      let lastScroll = window.scrollY;

      const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (
          currentScroll > lastScroll &&
          currentScroll > 120
        ) {
          gsap.to(navElement, {
            yPercent: -120,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
          });
        } else {
          gsap.to(navElement, {
            yPercent: 0,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
          });
        }

        lastScroll = currentScroll;
      };

      window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
      );

      // ================================
      // MAGNETIC BUTTON
      // ================================

      const moveX = gsap.quickTo(
        buttonElement,
        "x",
        {
          duration: 0.4,
          ease: "power3.out",
        }
      );

      const moveY = gsap.quickTo(
        buttonElement,
        "y",
        {
          duration: 0.4,
          ease: "power3.out",
        }
      );

      const magneticMove = (e) => {
        const rect =
          buttonElement.getBoundingClientRect();

        const x =
          e.clientX -
          (rect.left + rect.width / 2);

        const y =
          e.clientY -
          (rect.top + rect.height / 2);

        moveX(x * 0.25);
        moveY(y * 0.25);
      };

      const magneticReset = () => {
        moveX(0);
        moveY(0);
      };

      buttonElement.addEventListener(
        "mousemove",
        magneticMove
      );

      buttonElement.addEventListener(
        "mouseleave",
        magneticReset
      );

      // ================================
      // CLEANUP
      // ================================

      return () => {
        window.removeEventListener(
          "scroll",
          handleScroll
        );

        buttonElement.removeEventListener(
          "mousemove",
          magneticMove
        );

        buttonElement.removeEventListener(
          "mouseleave",
          magneticReset
        );
      };
    }, navElement);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <nav
      ref={nav}
      className="navbar"
    >
      {/* LOGO */}

      <a
        href="#home"
        className="nav-element nav-logo"
      >
        RITVIK<span>.</span>
      </a>

      {/* NAVIGATION */}

      <div className="nav-links">
        <a
          href="#about"
          className="nav-element"
        >
          ABOUT
        </a>

        <a
          href="#skills"
          className="nav-element"
        >
          SKILLS
        </a>

        <a
          href="#experience"
          className="nav-element"
        >
          EXPERIENCE
        </a>

        <a
          href="#work"
          className="nav-element"
        >
          WORK
        </a>
      </div>

      {/* MAGNETIC BUTTON */}

      <a
        ref={button}
        href="#contact"
        className="nav-talk nav-element"
      >
        LET'S TALK ↗
      </a>
    </nav>
  );
}

export default Navbar;