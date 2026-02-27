import { ExperienceCard } from './components/experience-card'
import { ProjectCard } from './components/project-card'
import { SkillCategory } from './components/skill-category'
import { TypedStrings } from './components/typed-strings'

export default function HomePage() {
  const startYear = 2022
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - startYear

  return (
    <main>
      <section id='hero' className='flex h-screen w-full items-center pt-24'>
        <div className='mx-auto w-full max-w-[1536px] px-4 text-white md:px-10'>
          <p className='mx-auto mb-8 w-fit whitespace-nowrap border-2 border-teal bg-linear-to-r from-teal to-primary p-2.5 font-medium text-xl sm:mx-0'>
            Welcome to my Portfolio
          </p>

          <h1 className='mx-auto text-center font-semibold text-5xl sm:mx-0 sm:text-left sm:text-6xl'>
            Hi! I&#39;m Pedro Lucena <br />
            <TypedStrings />
            <br className='sm:hidden' /> Developer
          </h1>

          <p className='mx-auto max-w-max py-4 text-center text-text-muted sm:mx-0 sm:max-w-2xl sm:text-left'>
            Full-Stack Developer with {yearsOfExperience} years of experience building production fintech systems in
            Switzerland using TypeScript, React, Node.js, and modern web technologies.
          </p>
        </div>
      </section>

      <section
        id='experience'
        className='0 mx-auto mb-[10vh] flex w-full max-w-[1360px] scroll-mt-24 flex-col items-center justify-center px-4'
      >
        <h2 className='text-center font-medium text-3xl text-white'>Experience</h2>

        <p className='py-4 text-center text-text-muted'>My professional journey</p>

        <div className='mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
          <ExperienceCard
            title='Full-Stack Developer'
            company='datalution GmbH, Switzerland'
            period='Jan 2024 - Present'
            description={`Architecting and developing **fintech applications** in a **Turborepo monorepo** with multiple interconnected projects.
- **Type-Safe APIs**: tRPC architecture with batch streaming links and end-to-end type-safety across 50+ routers.
- **React 19**: Implementation of useTransition, useOptimistic and useActionState for optimistic UI across 47+ forms.
- **Internationalization**: next-intl with dynamic localized routes in 4 languages (DE/EN/FR/IT) and 200+ pathnames.
- **PWA**: Complete Web Push Notifications system with service workers.
- **Auth**: Supabase Auth with OAuth (Google/Apple) + SMS verification via Twilio.
- **Payments**: Stripe integration with webhooks, customer portal and subscription management.
- **CI/CD**: GitHub Actions with automated deployment to VPS and Turborepo caching.`}
            technologies={['Next.js 15', 'React 19', 'tRPC', 'TypeScript', 'Prisma', 'Supabase', 'Stripe']}
          />

          <ExperienceCard
            title='Front-End Developer'
            company='Support Informática, Brazil'
            period='Jan 2023 - Dec 2023'
            description={`Developed custom **e-commerce templates** for stores and maintained a **React Native** app used by hundreds of establishments across the city, performing **major Expo version upgrades**, implementing new features and fixing a **critical bug** that displayed incorrect monetary values.
- Led **optimization initiatives** on the e-commerce website, **reducing latency by 70%** (from 5 to 1.5 seconds), supporting high-traffic operations.
- Architected and deployed the **stores CRM** from scratch, building the system structure and core functionalities.`}
            technologies={['React', 'React Native', 'TypeScript', 'TanStack Query', 'Zustand', 'Material UI']}
          />

          <ExperienceCard
            title='E-commerce Developer'
            company='Contract · Freelance, Portugal'
            period='Dec 2022 - Jan 2023'
            description={`Full-stack development of a complete e-commerce platform, from scratch to production.
- **Auth & Users**: Secure authentication system with registration, login and profile editing.
- **Product Catalog**: Complete product CRUD with details page, category listing, advanced filters and search.
- **Shopping Cart**: Functional cart with item addition, removal and review before purchase.
- **Admin Dashboard**: Central panel for product management, orders and operations monitoring.
- **Dynamic UI**: Adaptive header based on user interactions and page context.
- **Marketing**: Newsletter system for email collection and social media sharing functionality.`}
            technologies={['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS']}
          />

          <ExperienceCard
            title='Full-Stack Developer'
            company='Contract · Caixa Angola, Angola'
            period='Apr 2022 - Jul 2022'
            description={`Developed a complete event management system with user grades and AWS S3 media storage integration.
- **Registration and Login System**: Secure implementation for account creation and user authentication.
- **Event Management**: System for creating and managing events with title, description and images.
- **Individual Grades**: System for assigning and viewing grades specific to each user.
- **AWS S3 Storage**: Use of an S3 bucket for static file storage.
- **Media Upload and Management**: Direct media file upload to S3 bucket, including file viewing and management.`}
            technologies={['Python', 'Django', 'PostgreSQL', 'AWS S3', 'HTML']}
          />
        </div>
      </section>

      <section id='skills' className='mb-[10vh] flex scroll-mt-24 items-center justify-center px-4 md:px-10'>
        <div className='h-min w-full max-w-[1360px] rounded-[50px] bg-linear-to-tr from-secondary to-tertiary px-4 py-14 md:px-14'>
          <h3 className='text-center font-medium text-3xl text-white'>Skills</h3>

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

      <section id='projects' className='scroll-mt-24 bg-tertiary py-12'>
        <h4 className='text-center font-medium text-3xl text-white'>Projects</h4>

        <p className='py-4 text-center text-text-muted'>My recent work</p>

        {/* Projects grid */}
        <div className='mx-auto mt-6 grid max-w-[1536px] grid-cols-1 justify-items-center gap-6 px-4 sm:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          <ProjectCard
            name='22AI'
            skills='OpenRouter NextJS Framer Motion'
            projectDesc='T3 Chat clone for cloneathon. I really like the number 22.'
            image='https://i.imgur.com/hrYjGo7.jpeg'
            // github='https://github.com/PedroL22/22ai'
            live='https://22ai.app'
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
