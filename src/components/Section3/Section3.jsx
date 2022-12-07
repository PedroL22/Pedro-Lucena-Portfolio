import React from "react";
import Project from "./Project/Project";
import "./styles.css";

function Section3() {
  return (
    <div className="section3">
      <h1 className="projects">Projects</h1>
      <p className="description2">My recent Work</p>
      <div className="grid2">
        <Project
          name="Next JS Social Network"
          skills="NextJS Prisma Tailwind Daisy UI"
          projectdesc="A Next JS social network prototype built with Tailwind CSS, Daisy UI and Prisma."
          image="https://user-images.githubusercontent.com/40894497/206275586-7bd956a7-c2a5-478e-bae0-cb0ae098a1d9.jpg"
          github="https://github.com/PedroL22/Next-JS-Social-Network"
          live="http://next-js-social-network.vercel.app/"
        />
        <Project
          name="Mobile Country Flags Search"
          skills="React Native Expo Native Base"
          projectdesc="Mobile version of Country Flags Search made with React Native, Expo and Native Base."
          image="https://user-images.githubusercontent.com/40894497/201456268-ee5950ed-e696-4755-b3a8-04718c1f8d75.jpg"
          github="https://github.com/PedroL22/React-Native-Country-Flags-Search"
          live="https://github.com/PedroL22/React-Native-Country-Flags-Search/releases"
        />
        <Project
          name="The News Website"
          skills="NextJS API PostgreSQL Tailwind HTML"
          projectdesc="A news website made with The Guardian API, Next JS, PostgreSQL, and Tailwind CSS based on Globo's G1."
          image="https://user-images.githubusercontent.com/40894497/193134525-37adbf5a-f7a4-4199-a15f-bfacdcd35fc8.jpg"
          github="https://github.com/PedroL22/The-News-Website"
          live="https://the-news-website.vercel.app/"
        />
        <Project
          name="Country Flag Search"
          skills="ReactJS API JavaScript Tailwind HTML"
          projectdesc="A simple website for country searching made with React JS, Tailwind CSS and REST Countries API."
          image="https://user-images.githubusercontent.com/40894497/194392787-682d99dc-ad31-49a6-8213-036261518ab1.jpg"
          github="https://github.com/PedroL22/Country-Flags-Search"
          live="https://country-flags-search.vercel.app/"
        />
        <Project
          name="React Twitter Clone"
          skills="ReactJS TypeScript Tailwind HTML"
          projectdesc="A Twitter clone I made from scratch with React JS and Tailwind CSS."
          image="https://user-images.githubusercontent.com/40894497/192005338-7b4dc8a6-fcf2-44c0-95ff-eae159588a87.jpg"
          github="https://github.com/PedroL22/React-Twitter-Clone"
          live="https://react-twitter-clone.vercel.app/"
        />
        <Project
          name="React Facebook Register Clone"
          skills="ReactJS TypeScript Tailwind HTML"
          projectdesc="A Facebook Register clone I made from scratch with React JS and Tailwind CSS."
          image="https://user-images.githubusercontent.com/40894497/192394381-3d026518-3c1b-43b2-9ed0-3db1c3a17907.jpg"
          github="https://github.com/PedroL22/React-Facebook-Register-Clone"
          live="https://react-facebook-register-clone.vercel.app/"
        />
        <Project
          name="Django Social Network"
          skills="Django Python HTML CSS"
          projectdesc="Just a basic social media prototype made with Django."
          image="https://user-images.githubusercontent.com/40894497/186735837-58588ed4-3130-4ce6-9a08-ce62a63c456a.jpg"
          github="https://github.com/PedroL22/Django-Social-Network"
          live="https://djangosocial-network.herokuapp.com/"
        />
        <Project
          name="NLW Copa"
          skills="React Native Next JS Node JS API"
          projectdesc="FIFA World Cup Polls - NLW Copa Rocketseat"
          image="https://user-images.githubusercontent.com/40894497/200389011-5b4fd681-a09d-4828-925c-56fed8694937.png"
          github="https://github.com/PedroL22/NLW-Copa"
          live="https://github.com/PedroL22/NLW-Copa"
        />
        <Project
          name="React Netflix Clone"
          skills="ReactJS API JavaScript HTML CSS"
          projectdesc="A Netflix clone made with React JS and the TMDB API."
          image="https://user-images.githubusercontent.com/40894497/186737672-fde01140-8eb1-4f22-80b3-d76db2576d9a.PNG"
          github="https://github.com/PedroL22/React-Netflix-Clone"
          live="https://react-js-netflix-clone.vercel.app/"
        />
        <Project
          name="React Cats Facts"
          skills="ReactJS API JavaScript HTML CSS"
          projectdesc="A basic website that displays random cats facts from https://catfact.ninja/ API and a random cat photo from https://cataas.com/."
          image="https://user-images.githubusercontent.com/40894497/189736293-377aaaae-8b67-46db-93c3-a4b0258e1cbe.jpg"
          github="https://github.com/PedroL22/React-Cats-Facts"
          live="https://react-cats-facts.vercel.app/"
        />
        <Project
          name="Django Dogs Facts"
          skills="Django API Python HTML CSS"
          projectdesc="Random dogs facts from https://kinduff.github.io/dog-api/ API and random dog photo from https://dog.ceo/dog-api/ API."
          image="https://user-images.githubusercontent.com/40894497/190247289-6a315083-59fe-48ba-a021-e0e7e3a280cd.jpg"
          github="https://github.com/PedroL22/Django-Dogs-Facts"
          live="https://django-dogs-facts.herokuapp.com/"
        />
        <Project
          name="Automotive Solutions Django"
          projectdesc="Website I made with Django for a Nashville mechanic."
          skills="Django Python HTML CSS"
          image="https://user-images.githubusercontent.com/40894497/187775469-ae2d31ec-1b91-4c9b-b1c9-c747aabbac21.jpg"
          github="https://github.com/PedroL22/Automotive-Solutions-Django"
          live="https://automotivesolutions.herokuapp.com/"
        />
        <Project
          name="HTML CSS Landing Page"
          skills="HTML CSS"
          projectdesc="A simple landing page I created with HTML and CSS only."
          image="https://user-images.githubusercontent.com/40894497/187776471-ff01e309-42dc-491d-be87-72aef41300a3.jpg"
          github="https://github.com/PedroL22/Simple-HTML-CSS-Landing-Page"
          live="https://simple-html-css-landing-page.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Section3;
