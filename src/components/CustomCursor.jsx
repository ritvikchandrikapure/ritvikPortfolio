import { useEffect, useRef } from "react";
import gsap from "gsap";


function CustomCursor() {

  const cursor = useRef(null);
  const follower = useRef(null);


  useEffect(() => {

    const moveCursor = (e) => {

      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      });

    };


    window.addEventListener(
      "mousemove",
      moveCursor
    );


    const interactive =
      document.querySelectorAll(
        "a, button, .project-card, .skill-card"
      );


    interactive.forEach((element) => {

      element.addEventListener(
        "mouseenter",
        () => {

          gsap.to(follower.current, {
            scale: 2.5,
            duration: 0.3
          });

        }
      );


      element.addEventListener(
        "mouseleave",
        () => {

          gsap.to(follower.current, {
            scale: 1,
            duration: 0.3
          });

        }
      );

    });


    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

    };

  }, []);


  return (

    <>
      <div
        ref={cursor}
        className="cursor-dot"
      />

      <div
        ref={follower}
        className="cursor-follower"
      />
    </>

  );
}


export default CustomCursor;