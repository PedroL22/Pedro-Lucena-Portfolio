import { Project } from './Project'

export const Section3 = () => {
  return (
    <div className='h-auto overflow-hidden bg-tertiary pb-[50px]' id='section3'>
      <h1 className='block pt-[50px] text-center font-medium text-white'>Projects</h1>

      <p className='py-[15px] text-center font-normal text-text-muted normal-case'>My recent work</p>

      <div className='grid grid-cols-3 content-center justify-center max-[640px]:grid-cols-1 max-[990px]:grid-cols-2 min-[1920px]:grid-cols-4'>
        <Project
          name='22AI'
          skills='OpenRouter NextJS Framer Motion'
          projectDesc='T3 Chat clone for cloneathon. I really like the number 22.'
          image='https://i.imgur.com/hrYjGo7.jpeg'
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
        />

        <Project
          name='Django Social Network'
          skills='Django Python HTML CSS'
          projectDesc='Just a basic social media prototype made with Django.'
          image='https://user-images.githubusercontent.com/40894497/186735837-58588ed4-3130-4ce6-9a08-ce62a63c456a.jpg'
          github='https://github.com/PedroL22/Django-Social-Network'
        />
      </div>
    </div>
  )
}
