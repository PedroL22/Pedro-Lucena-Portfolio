import React from 'react';
import './styles.css';

function Project({
  name, image, github, live,
}) {
  return (
    <div className="project">
      <div className="image-wrapper">
        <img className="image" src={image} />
      </div>
      <h3 className="name">{name}</h3>
      <a className="github" href={github} target="_blank" rel="noreferrer">
        gitHub
      </a>
      <a className="live" href={live} target="_blank" rel="noreferrer">
        Live demo
      </a>
    </div>
  );
}

export default Project;
