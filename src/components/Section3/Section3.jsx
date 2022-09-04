import React from 'react';
import Project from './Project/Project';
import './styles.css';

function Section3() {
  return (
    <div className="section3">
      <h1 className="projects">Projects</h1>
      <p className="description2">My recent Work</p>
      <div className="grid2">
        <Project
          name="Django Social Network"
          image="https://user-images.githubusercontent.com/40894497/186735837-58588ed4-3130-4ce6-9a08-ce62a63c456a.jpg"
          github="https://github.com/PedroL22/Django-Social-Network"
          live="https://djangosocial-network.herokuapp.com/"
        />
        <Project
          name="React Netflix Clone"
          image="https://user-images.githubusercontent.com/40894497/186737672-fde01140-8eb1-4f22-80b3-d76db2576d9a.PNG"
          github="https://github.com/PedroL22/React-Netflix-Clone"
          live="https://react-js-netflix-clone-tmdb-api.netlify.app/"
        />
        <Project
          name="Automotive Solutions Django"
          image="https://user-images.githubusercontent.com/40894497/187775469-ae2d31ec-1b91-4c9b-b1c9-c747aabbac21.jpg"
          github="https://github.com/PedroL22/Automotive-Solutions-Django"
          live="https://automotivesolutions.herokuapp.com/"
        />
        <Project
          name="Simple HTML CSS Landing Page"
          image="https://user-images.githubusercontent.com/40894497/187776471-ff01e309-42dc-491d-be87-72aef41300a3.jpg"
          github="https://github.com/PedroL22/Simple-HTML-CSS-Landing-Page"
          live="https://simple-html-css-landing-page.netlify.app/"
        />
      </div>
    </div>
  );
}

export default Section3;
