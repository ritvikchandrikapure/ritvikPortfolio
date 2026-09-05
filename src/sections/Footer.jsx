import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-big", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".site-footer",
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      className="site-footer"
      ref={footerRef}
    >
      <div className="footer-top">
        <span>RITVIK</span>
        <span>CREATIVE DEVELOPER</span>
        <span>2026</span>
      </div>

      <div className="footer-big">
        R.
      </div>

      <div className="footer-bottom">
        <span>
          DESIGNED + DEVELOPED WITH CURIOSITY
        </span>

        <span>
          BACK TO TOP ↑
        </span>
      </div>
    </footer>
  );
}

export default Footer;