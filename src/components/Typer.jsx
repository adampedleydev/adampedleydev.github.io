
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Typer = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer.", "Musician.", "Designer."],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 200,
      loop: true,
      showCursor: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span ref={el}></span>
  );
}

export default Typer;
