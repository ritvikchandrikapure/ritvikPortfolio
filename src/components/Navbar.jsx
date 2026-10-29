<<<<<<< HEAD
import { useEffect, useRef } from "react";
=======
import { useEffect, useRef, useState } from "react";
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
import gsap from "gsap";

function Navbar() {
  const nav = useRef(null);
  const button = useRef(null);
<<<<<<< HEAD
=======
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const jumpToSkills = (event) => {
    event.preventDefault();
    document.getElementById("skills")?.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
    closeMenu();
  };
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7

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

<<<<<<< HEAD
      gsap.from(".nav-element", {
=======
      gsap.from(".nav-element:not(.nav-talk)", {
        y: -30,
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
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

<<<<<<< HEAD
=======
  // ================================
  // MOBILE MENU OPEN / CLOSE
  // ================================

  useEffect(() => {
    const menuElement = menuRef.current;

    if (!menuElement) {
      return;
    }

    if (menuOpen) {
      document.body.style.overflow = "hidden";

      gsap.set(menuElement, { display: "flex" });

      gsap.fromTo(
        menuElement,
        { clipPath: "inset(0% 0% 100% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.6,
          ease: "power4.inOut",
        }
      );

      gsap.fromTo(
        ".mobile-nav-link",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      document.body.style.overflow = "";

      gsap.to(menuElement, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(menuElement, { display: "none" });
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
  return (
    <nav
      ref={nav}
      className="navbar"
    >
      {/* LOGO */}

      <a
        href="#home"
        className="nav-element nav-logo"
<<<<<<< HEAD
=======
        onClick={closeMenu}
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
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
<<<<<<< HEAD
=======
          onClick={jumpToSkills}
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
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
<<<<<<< HEAD
=======

      {/* MOBILE MENU TOGGLE */}

      <button
        type="button"
        className={`nav-burger nav-element ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* MOBILE MENU OVERLAY */}

      <div
        ref={menuRef}
        className="mobile-nav"
      >
        <a
          href="#about"
          className="mobile-nav-link"
          onClick={closeMenu}
        >
          ABOUT
        </a>

        <a
          href="#skills"
          className="mobile-nav-link"
          onClick={jumpToSkills}
        >
          SKILLS
        </a>

        <a
          href="#experience"
          className="mobile-nav-link"
          onClick={closeMenu}
        >
          EXPERIENCE
        </a>

        <a
          href="#work"
          className="mobile-nav-link"
          onClick={closeMenu}
        >
          WORK
        </a>

        <a
          href="#contact"
          className="mobile-nav-link mobile-nav-cta"
          onClick={closeMenu}
        >
          LET'S TALK ↗
        </a>
      </div>
>>>>>>> 178bdd83bc2214667aa41b957e4c74690f28f5c7
    </nav>
  );
}

export default Navbar;