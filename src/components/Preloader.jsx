import { useEffect, useRef } from "react";
import gsap from "gsap";


function Preloader({ onComplete }) {

  const loader = useRef(null);
  const counterRef = useRef(null);
  const lineRef = useRef(null);


  useEffect(() => {

    const counter = {
      value: 0
    };


    const tl = gsap.timeline({

      onComplete: () => {

        gsap.to(loader.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          onComplete
        });

      }

    });


    tl.to(counter, {

      value: 100,

      duration: 2,

      ease: "power2.out",

      onUpdate: () => {

        counterRef.current.textContent =
          `${Math.floor(counter.value)}%`;

      }

    });


    tl.to(
      lineRef.current,
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.inOut"
      },
      "-=0.8"
    );


    return () => tl.kill();

  }, [onComplete]);


  return (

    <div
      ref={loader}
      className="preloader"
    >

      <div className="preloader-top">

        <span>RITVIK</span>

        <span>PORTFOLIO / 2026</span>

      </div>


      <div className="preloader-center">

        <span
          ref={counterRef}
          className="preloader-number"
        >
          0%
        </span>

      </div>


      <div className="preloader-bottom">

        <span>
          FULL STACK DEVELOPER
        </span>

        <div className="loader-track">

          <div
            ref={lineRef}
            className="loader-progress"
          />

        </div>

      </div>

    </div>

  );
}


export default Preloader;