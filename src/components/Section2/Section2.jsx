import React from 'react';
import './styles.css';
import Grid1 from './Grid1/Grid1';
import Grid2 from './Grid2/Grid2';

function Section2() {
  return (
    <section className="section2">
      <div className="square">
        <h1>Skills</h1>
        <p className="description">What Skills Do I have?</p>
        <div className="wrapper">
          <div className="frontend">
            <Grid1 />
          </div>
          <div className="backend">
            <Grid2 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
