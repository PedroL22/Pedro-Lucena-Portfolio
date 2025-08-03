import './styles.css'

import { Project } from './Project'

export const Section3 = () => {
  return (
    <div className='section3'>
      <h1 className='projects'>Projects</h1>

      <p className='description2'>My recent work</p>

      <div className='grid2'>
        <Project
          name='22AI'
          skills='OpenRouter NextJS Framer Motion'
          projectDesc='T3 Chat clone for cloneathon. I really like the number 22.'
          image='https://imgur.com/a/rTj9pqy'
          github='https://github.com/PedroL22/22ai'
          live='https://22ai.vercel.app/'
        />

        <Project
          name='Black Studios'
          skills='NextJS Tailwind Framer Motion'
          projectDesc='A portfolio website created with Next JS, Tailwind CSS and Framer Motion.'
          image='https://user-images.githubusercontent.com/40894497/262020753-890958c0-2ea1-4cd1-9154-dc2c4ba94224.png'
          github='https://github.com/PedroL22/black-studios'
          live='https://black-studios.vercel.app/'
        />

        <Project
          name='Custom Marco Guillermo'
          skills='NextJS Tailwind'
          projectDesc='Custom Marco Guillermo website made with Next JS and Tailwind CSS.'
          image='https://user-images.githubusercontent.com/40894497/271020998-6ecd6a35-1eef-4a76-acb6-0b3bcb07da66.png'
          github='https://github.com/PedroL22/Custom-Marco-Guillermo'
          live='https://custom-marco-guillermo.vercel.app/'
        />

        <Project
          name='Next JS Social Network'
          skills='NextJS Prisma Tailwind Daisy UI'
          projectDesc='A Next JS social network prototype built with Tailwind CSS, Daisy UI and Prisma.'
          image='https://user-images.githubusercontent.com/40894497/206275586-7bd956a7-c2a5-478e-bae0-cb0ae098a1d9.jpg'
          github='https://github.com/PedroL22/Next-JS-Social-Network'
          live='http://next-js-social-network.vercel.app/'
        />

        <Project
          name='Mobile Country Flags Search'
          skills='React Native Expo Native Base'
          projectDesc='Mobile version of Country Flags Search made with React Native, Expo and Native Base.'
          image='https://user-images.githubusercontent.com/40894497/201456268-ee5950ed-e696-4755-b3a8-04718c1f8d75.jpg'
          github='https://github.com/PedroL22/React-Native-Country-Flags-Search'
          live='https://github.com/PedroL22/React-Native-Country-Flags-Search/releases'
        />

        <Project
          name='Country Flag Search'
          skills='ReactJS API JavaScript Tailwind HTML'
          projectDesc='A website for country searching made with React JS, Tailwind CSS and Tanstack Query.'
          image='https://user-images.githubusercontent.com/40894497/194392787-682d99dc-ad31-49a6-8213-036261518ab1.jpg'
          github='https://github.com/PedroL22/Country-Flags-Search'
          live='https://country-flags-search.vercel.app/'
        />

        <Project
          name='Pokémon Search'
          skills='ReactJS API Styled Components'
          projectDesc='A modern website for Pokémon searching made with Next JS, React JS, Tanstack Query and Styled Components.'
          image='https://user-images.githubusercontent.com/40894497/219380777-9b8bda85-7496-485b-8374-f0c659473765.png'
          github='https://github.com/PedroL22/Pokemon-Search'
          live='https://pokemon-list-search.vercel.app/'
        />

        <Project
          name='The News Website'
          skills='NextJS API Tanstack Query Tailwind'
          projectDesc="A news website made with The Guardian API, Next JS, Tanstack Query, and Tailwind CSS based on Globo's G1."
          image='https://user-images.githubusercontent.com/40894497/193134525-37adbf5a-f7a4-4199-a15f-bfacdcd35fc8.jpg'
          github='https://github.com/PedroL22/The-News-Website'
          live='https://the-news-website.vercel.app/'
        />

        <Project
          name='React Twitter Clone'
          skills='ReactJS TypeScript Tailwind HTML'
          projectDesc='A Twitter clone I made from scratch with React JS and Tailwind CSS.'
          image='https://user-images.githubusercontent.com/40894497/192005338-7b4dc8a6-fcf2-44c0-95ff-eae159588a87.jpg'
          github='https://github.com/PedroL22/React-Twitter-Clone'
          live='https://react-twitter-clone.vercel.app/'
        />

        <Project
          name='React Facebook Register Clone'
          skills='ReactJS TypeScript Tailwind HTML'
          projectDesc='A Facebook Register clone I made from scratch with React JS and Tailwind CSS.'
          image='https://user-images.githubusercontent.com/40894497/192394381-3d026518-3c1b-43b2-9ed0-3db1c3a17907.jpg'
          github='https://github.com/PedroL22/React-Facebook-Register-Clone'
          live='https://react-facebook-register-clone.vercel.app/'
        />

        <Project
          name='Django Social Network'
          skills='Django Python HTML CSS'
          projectDesc='Just a basic social media prototype made with Django.'
          image='https://user-images.githubusercontent.com/40894497/186735837-58588ed4-3130-4ce6-9a08-ce62a63c456a.jpg'
          github='https://github.com/PedroL22/Django-Social-Network'
          live='https://djangosocial-network.herokuapp.com/'
        />

        <Project
          name='React Cats Facts'
          skills='ReactJS API JavaScript HTML CSS'
          projectDesc='A basic website that displays random cats facts from https://catfact.ninja/ API and a random cat photo from https://cataas.com/.'
          image='https://user-images.githubusercontent.com/40894497/189736293-377aaaae-8b67-46db-93c3-a4b0258e1cbe.jpg'
          github='https://github.com/PedroL22/React-Cats-Facts'
          live='https://react-cats-facts.vercel.app/'
        />

        <Project
          name='Django Dogs Facts'
          skills='Django API Python HTML CSS'
          projectDesc='Random dogs facts from https://kinduff.github.io/dog-api/ API and random dog photo from https://dog.ceo/dog-api/ API.'
          image='https://user-images.githubusercontent.com/40894497/190247289-6a315083-59fe-48ba-a021-e0e7e3a280cd.jpg'
          github='https://github.com/PedroL22/Django-Dogs-Facts'
          live='https://django-dogs-facts.herokuapp.com/'
        />

        <Project
          name='Automotive Solutions Django'
          projectDesc='Website I made with Django for a Nashville mechanic.'
          skills='Django Python HTML CSS'
          image='https://user-images.githubusercontent.com/40894497/187775469-ae2d31ec-1b91-4c9b-b1c9-c747aabbac21.jpg'
          github='https://github.com/PedroL22/Automotive-Solutions-Django'
          live='https://automotivesolutions.herokuapp.com/'
        />

        <Project
          name='HTML CSS Landing Page'
          skills='HTML CSS'
          projectDesc='A simple landing page I created with HTML and CSS only.'
          image='https://user-images.githubusercontent.com/40894497/187776471-ff01e309-42dc-491d-be87-72aef41300a3.jpg'
          github='https://github.com/PedroL22/Simple-HTML-CSS-Landing-Page'
          live='https://simple-html-css-landing-page.vercel.app/'
        />
      </div>
    </div>
  )
}
