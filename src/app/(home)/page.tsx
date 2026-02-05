import { ProjectCard } from './components/project-card'
import { SkillCategory } from './components/skill-category'
import { TypedStrings } from './components/typed-strings'

export default function HomePage() {
  const startYear = 2022
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - startYear

  return (
    <main>
      <section id='section1' className='flex h-screen w-full items-center overflow-x-hidden pt-[100px]'>
        <div className='mx-auto w-full max-w-[1536px] px-4 text-white md:px-10'>
          <h2 className='w-fit whitespace-nowrap border-2 border-teal bg-linear-to-r from-teal to-primary p-2.5 font-medium text-xl max-[600px]:mx-auto max-[600px]:mb-[30px]'>
            Welcome to my Portfolio
          </h2>

          <h1 className='font-semibold text-[60px] max-[600px]:mx-auto max-[600px]:text-center max-[600px]:text-[50px] max-[670px]:text-[50px]'>
            Hi! I&#39;m Pedro Lucena <br />
            <TypedStrings />
            <br className='hidden max-[600px]:block' /> Developer
          </h1>

          <p className='max-w-[650px] py-[15px] text-text-muted max-[600px]:mx-auto max-[600px]:max-w-max max-[600px]:text-center'>
            Full Stack Developer with {yearsOfExperience} years of experience building production fintech systems in
            Switzerland using TypeScript, React, Node.js, and modern web technologies.
          </p>
        </div>
      </section>

      <section id='section2' className='mb-[10vh] flex items-center justify-center overflow-hidden px-4 md:px-10'>
        <div className='h-min w-full max-w-[1536px] rounded-[50px] bg-linear-to-tr from-secondary to-tertiary px-4 py-14 md:px-14'>
          <h1 className='text-center font-medium text-3xl text-white'>Skills</h1>

          <p className='py-4 text-center text-text-muted'>What skills do I have?</p>

          {/* Skills grid */}
          <div className='grid grid-cols-1 gap-6 pt-4 md:grid-cols-2 md:p-10 xl:grid-cols-3'>
            <SkillCategory
              title='Front-End Development'
              skills={['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand']}
            />

            <SkillCategory title='Back-End Development' skills={['Node.js', 'Bun', 'Hono', 'tRPC', 'Prisma']} />

            <SkillCategory
              title='DevOps & Architecture'
              skills={['Docker', 'AWS S3', 'CI/CD', 'GitHub Actions', 'Turborepo', 'Serverless']}
            />
          </div>
        </div>
      </section>

      <section id='section3' className='h-auto overflow-hidden bg-tertiary pb-[50px]'>
        <h1 className='block pt-[50px] text-center font-medium text-white'>Projects</h1>

        <p className='py-[15px] text-center text-text-muted'>My recent work</p>

        {/* Projects grid */}
        <div className='mx-auto grid max-w-7xl grid-cols-3 content-center justify-center gap-6 max-[640px]:grid-cols-1 max-[990px]:grid-cols-2 min-[1920px]:grid-cols-4'>
          <ProjectCard
            name='22AI'
            skills='OpenRouter NextJS Framer Motion'
            projectDesc='T3 Chat clone for cloneathon. I really like the number 22.'
            image='https://i.imgur.com/hrYjGo7.jpeg'
            github='https://github.com/PedroL22/22ai'
            live='https://22ai.vercel.app/'
          />

          <ProjectCard
            name='Black Studios'
            skills='NextJS Tailwind Framer Motion'
            projectDesc='A portfolio website created with Next JS, Tailwind CSS and Framer Motion.'
            image='https://user-images.githubusercontent.com/40894497/262020753-890958c0-2ea1-4cd1-9154-dc2c4ba94224.png'
            github='https://github.com/PedroL22/black-studios'
            live='https://black-studios.vercel.app/'
          />

          <ProjectCard
            name='Custom Marco Guillermo'
            skills='NextJS Tailwind'
            projectDesc='Custom Marco Guillermo website made with Next JS and Tailwind CSS.'
            image='https://user-images.githubusercontent.com/40894497/271020998-6ecd6a35-1eef-4a76-acb6-0b3bcb07da66.png'
            github='https://github.com/PedroL22/Custom-Marco-Guillermo'
            live='https://custom-marco-guillermo.vercel.app/'
          />

          <ProjectCard
            name='Next JS Social Network'
            skills='NextJS Prisma Tailwind Daisy UI'
            projectDesc='A Next JS social network prototype built with Tailwind CSS, Daisy UI and Prisma.'
            image='https://user-images.githubusercontent.com/40894497/206275586-7bd956a7-c2a5-478e-bae0-cb0ae098a1d9.jpg'
            github='https://github.com/PedroL22/Next-JS-Social-Network'
          />

          <ProjectCard
            name='Mobile Country Flags Search'
            skills='React Native Expo Native Base'
            projectDesc='Mobile version of Country Flags Search made with React Native, Expo and Native Base.'
            image='https://user-images.githubusercontent.com/40894497/201456268-ee5950ed-e696-4755-b3a8-04718c1f8d75.jpg'
            github='https://github.com/PedroL22/React-Native-Country-Flags-Search'
            live='https://github.com/PedroL22/React-Native-Country-Flags-Search/releases'
          />

          <ProjectCard
            name='Country Flag Search'
            skills='ReactJS API JavaScript Tailwind HTML'
            projectDesc='A website for country searching made with React JS, Tailwind CSS and Tanstack Query.'
            image='https://user-images.githubusercontent.com/40894497/194392787-682d99dc-ad31-49a6-8213-036261518ab1.jpg'
            github='https://github.com/PedroL22/Country-Flags-Search'
          />

          <ProjectCard
            name='Pokémon Search'
            skills='ReactJS API Styled Components'
            projectDesc='A modern website for Pokémon searching made with Next JS, React JS, Tanstack Query and Styled Components.'
            image='https://user-images.githubusercontent.com/40894497/219380777-9b8bda85-7496-485b-8374-f0c659473765.png'
            github='https://github.com/PedroL22/Pokemon-Search'
            live='https://pokemon-list-search.vercel.app/'
          />

          <ProjectCard
            name='The News Website'
            skills='NextJS API Tanstack Query Tailwind'
            projectDesc="A news website made with The Guardian API, Next JS, Tanstack Query, and Tailwind CSS based on Globo's G1."
            image='https://user-images.githubusercontent.com/40894497/193134525-37adbf5a-f7a4-4199-a15f-bfacdcd35fc8.jpg'
            github='https://github.com/PedroL22/The-News-Website'
          />

          <ProjectCard
            name='Django Social Network'
            skills='Django Python HTML CSS'
            projectDesc='Just a basic social media prototype made with Django.'
            image='https://user-images.githubusercontent.com/40894497/186735837-58588ed4-3130-4ce6-9a08-ce62a63c456a.jpg'
            github='https://github.com/PedroL22/Django-Social-Network'
          />
        </div>
      </section>
    </main>
  )
}
