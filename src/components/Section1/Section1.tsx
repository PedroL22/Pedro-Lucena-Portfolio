import React from "react";
import "./styles.css";
import { animateScroll } from "react-scroll";
import Typed from "react-typed";
import rightArrow from "../../assets/images/right-arrow.png";

function Section1() {
  const handleClick2 = (event: any) => {
    animateScroll.scrollTo(5000, { smooth: true, duration: 500 });
    setActive("header-right");
    setToggleIcon("hamburger");
  };

  return (
    <section className="section1" id="section1">
      <div className="text">
        <h2 className="welcome">Welcome to my Portfolio</h2>
        <h1>
          Hi! I'm Pedro Lucena <br />{" "}
          <Typed
            strings={["Full Stack", "Front-End", "Back-End", "React", "Node"]}
            typeSpeed={50}
            backSpeed={60}
            loop
            className="typed"
          />
          <br className="breakline" /> Developer
        </h1>
        <p>
          Hi, my name is Pedro, I'm a 20 years old Full Stack Developer with a
          focus on JavaScript/TypeScript. Having more than 20 projects and 5
          years of practice, I have experience with Front-End, Back-End and also
          Mobile development.
        </p>
        <div className="connect" onClick={handleClick2}>
          <h2 className="connect-text">Let's connect!</h2>
          <img src={rightArrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
