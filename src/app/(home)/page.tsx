import { ProjectCard } from './components/project-card'
import { Skill } from './components/skill'
import { TypedStrings } from './components/typed-strings'

export default function HomePage() {
  const startYear = 2022
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - startYear

  return (
    <main>
      <section id='section1' className='mt-[100px] h-screen w-full overflow-x-hidden'>
        <div className='absolute top-[55%] -translate-y-1/2 px-[5vw] text-white max-[600px]:pt-[100px] max-[670px]:pt-[150px] 2xl:px-[28vw]'>
          <h2 className='w-fit whitespace-nowrap border-2 border-teal bg-linear-to-r from-primary to-teal p-2.5 font-medium max-[600px]:mx-auto max-[600px]:mb-[30px] max-[600px]:max-w-fit'>
            Welcome to my Portfolio
          </h2>

          <h1 className='font-semibold text-[60px] max-[600px]:mx-auto max-[600px]:text-center max-[600px]:text-[50px] max-[670px]:text-[50px]'>
            Hi! I&#39;m Pedro Lucena <br />
            <TypedStrings />
            <br className='hidden max-[600px]:block' /> Developer
          </h1>

          <p className='max-w-[650px] py-[15px] font-normal text-text-muted normal-case max-[600px]:mx-auto max-[600px]:max-w-max max-[600px]:text-center'>
            Full Stack Developer with {yearsOfExperience} years of experience building production fintech systems in
            Switzerland using TypeScript, React, Node.js, and modern web technologies.
          </p>
        </div>
      </section>

      <section id='section2' className='mb-[10vh] overflow-hidden'>
        <div className='mx-auto h-min w-[90vw] rounded-[50px] bg-linear-to-br from-tertiary to-secondary 2xl:w-[45vw]'>
          <h1 className='block pt-[50px] text-center font-medium text-white'>Skills</h1>

          <p className='py-[15px] text-center font-normal text-text-muted normal-case'>What skills do I have?</p>

          {/* Skills grid */}
          <div className='mx-auto flex min-h-fit w-[90vw] justify-between gap-5 p-10 pt-[40px] pb-[120px] max-[970px]:block max-[970px]:overflow-hidden max-[970px]:pt-[40px] max-[970px]:pb-[80px] 2xl:w-[45vw]'>
            <div className='mx-auto h-[275px] w-[400px] rounded-[25px] border-2 border-secondary bg-transparent px-6 text-center text-white transition-colors hover:bg-secondary max-[970px]:mb-[30px] max-[970px]:h-fit max-[970px]:w-[300px] max-[970px]:pb-[30px]'>
              <h2 className='py-[30px] font-normal'>Front-End Development</h2>

              <div className='grid grid-cols-2 justify-around text-left text-[15px]'>
                <Skill skillName='React 19' />
                <Skill skillName='Next.js 15' />
                <Skill skillName='TypeScript' />
                <Skill skillName='Tailwind CSS' />
                <Skill skillName='TanStack Query' />
                <Skill skillName='Zustand' />
              </div>
            </div>

            <div className='mx-auto h-[275px] w-[400px] rounded-[25px] border-2 border-secondary bg-transparent px-6 text-center text-white transition-colors hover:bg-secondary max-[970px]:mb-[30px] max-[970px]:h-fit max-[970px]:w-[300px] max-[970px]:pb-[30px]'>
              <h2 className='py-[30px] font-normal'>Back-End Development</h2>

              <div className='grid grid-cols-2 justify-around text-left text-[15px]'>
                <Skill skillName='Node.js' />
                <Skill skillName='Bun' />
                <Skill skillName='Hono' />
                <Skill skillName='tRPC' />
                <Skill skillName='Prisma' />
              </div>
            </div>

            <div className='mx-auto h-[275px] w-[400px] rounded-[25px] border-2 border-secondary bg-transparent px-6 text-center text-white transition-colors hover:bg-secondary max-[970px]:mb-[30px] max-[970px]:h-fit max-[970px]:w-[300px] max-[970px]:pb-[30px]'>
              <h2 className='py-[30px] font-normal'>DevOps &amp; Architecture</h2>

              <div className='grid grid-cols-2 justify-around text-left text-[15px]'>
                <Skill skillName='Docker' />
                <Skill skillName='AWS S3' />
                <Skill skillName='CI/CD' />
                <Skill skillName='GitHub Actions' />
                <Skill skillName='Turborepo' />
                <Skill skillName='Serverless' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='section3' className='h-auto overflow-hidden bg-tertiary pb-[50px]'>
        <h1 className='block pt-[50px] text-center font-medium text-white'>Projects</h1>

        <p className='py-[15px] text-center font-normal text-text-muted normal-case'>My recent work</p>

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
