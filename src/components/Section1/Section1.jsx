import React from 'react';
import './styles.css';
import rightArrow from '../../assets/images/right-arrow.png';

function Section1() {
  return (
    <section className="section1" id="section1">
      <div className="text">
        <h2 className="welcome">Welcome to my Portfolio</h2>
        <h1>
          Hi! I'm Pedro Lucena
          {' '}
          <br />
          {' '}
          Full Stack Developer
        </h1>
        <p>
          I'm a Full Stack Developer capable of creating useful applications with React JS and
          Django Framework, I have a lot of experience with HTML, CSS and Bootstrap. I've worked
          with Amazon Web Services and Heroku.
        </p>
        <div className="connect">
          <h2 className="connect-text">Let's connect!</h2>
          <img src={rightArrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
