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
      <section className='flex h-screen w-full items-center pt-24' id='hero'>
        <div className='mx-auto w-full max-w-384 px-4 text-white md:px-10'>
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
        className='0 mx-auto mb-[10vh] flex w-full max-w-340 scroll-mt-24 flex-col items-center justify-center px-4'
        id='experience'
      >
        <h2 className='text-center font-medium text-3xl text-white'>Experience</h2>

        <p className='py-4 text-center text-text-muted'>My professional journey</p>

        <div className='mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
          <ExperienceCard
            company='datalution GmbH, Switzerland'
            description={`Architecting and developing **fintech applications** in a **Turborepo monorepo** with multiple interconnected projects.
- **Type-Safe APIs**: tRPC architecture with batch streaming links and end-to-end type-safety across 50+ routers.
- **React 19**: Implementation of useTransition, useOptimistic and useActionState for optimistic UI across 47+ forms.
- **Internationalization**: next-intl with dynamic localized routes in 4 languages (DE/EN/FR/IT) and 200+ pathnames.
- **PWA**: Complete Web Push Notifications system with service workers.
- **Auth**: Supabase Auth with OAuth (Google/Apple) + SMS verification via Twilio.
- **Payments**: Stripe integration with webhooks, customer portal and subscription management.
- **CI/CD**: GitHub Actions with automated deployment to VPS and Turborepo caching.`}
            period='Jan 2024 - Present'
            technologies={['Next.js 15', 'React 19', 'tRPC', 'TypeScript', 'Prisma', 'Supabase', 'Stripe']}
            title='Full-Stack Developer'
          />

          <ExperienceCard
            company='Support Informática, Brazil'
            description={`Developed custom **e-commerce templates** for stores and maintained a **React Native** app used by hundreds of establishments across the city, performing **major Expo version upgrades**, implementing new features and fixing a **critical bug** that displayed incorrect monetary values.
- Led **optimization initiatives** on the e-commerce website, **reducing latency by 70%** (from 5 to 1.5 seconds), supporting high-traffic operations.
- Architected and deployed the **stores CRM** from scratch, building the system structure and core functionalities.`}
            period='Jan 2023 - Dec 2023'
            technologies={['React', 'React Native', 'TypeScript', 'TanStack Query', 'Zustand', 'Material UI']}
            title='Front-End Developer'
          />

          <ExperienceCard
            company='Contract · Freelance, Portugal'
            description={`Full-stack development of a complete e-commerce platform, from scratch to production.
- **Auth & Users**: Secure authentication system with registration, login and profile editing.
- **Product Catalog**: Complete product CRUD with details page, category listing, advanced filters and search.
- **Shopping Cart**: Functional cart with item addition, removal and review before purchase.
- **Admin Dashboard**: Central panel for product management, orders and operations monitoring.
- **Dynamic UI**: Adaptive header based on user interactions and page context.
- **Marketing**: Newsletter system for email collection and social media sharing functionality.`}
            period='Dec 2022 - Jan 2023'
            technologies={['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS']}
            title='E-commerce Developer'
          />

          <ExperienceCard
            company='Contract · Caixa Angola, Angola'
            description={`Developed a complete event management system with user grades and AWS S3 media storage integration.
- **Registration and Login System**: Secure implementation for account creation and user authentication.
- **Event Management**: System for creating and managing events with title, description and images.
- **Individual Grades**: System for assigning and viewing grades specific to each user.
- **AWS S3 Storage**: Use of an S3 bucket for static file storage.
- **Media Upload and Management**: Direct media file upload to S3 bucket, including file viewing and management.`}
            period='Apr 2022 - Jul 2022'
            technologies={['Python', 'Django', 'PostgreSQL', 'AWS S3', 'HTML']}
            title='Full-Stack Developer'
          />
        </div>
      </section>

      <section className='mb-[10vh] flex scroll-mt-24 items-center justify-center px-4 md:px-10' id='skills'>
        <div className='h-min w-full max-w-340 rounded-[50px] bg-linear-to-tr from-secondary to-tertiary px-4 py-14 md:px-14'>
          <h3 className='text-center font-medium text-3xl text-white'>Skills</h3>

          <p className='py-4 text-center text-text-muted'>What skills do I have?</p>

          {/* Skills grid */}
          <div className='grid grid-cols-1 gap-6 pt-4 md:grid-cols-2 md:p-10 xl:grid-cols-3'>
            <SkillCategory
              skills={['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand']}
              title='Front-End Development'
            />

            <SkillCategory skills={['Node.js', 'Bun', 'Hono', 'tRPC', 'Prisma']} title='Back-End Development' />

            <SkillCategory
              skills={['Docker', 'AWS S3', 'CI/CD', 'GitHub Actions', 'Turborepo', 'Serverless']}
              title='DevOps & Architecture'
            />
          </div>
        </div>
      </section>

      <section className='scroll-mt-24 bg-tertiary py-12' id='projects'>
        <h4 className='text-center font-medium text-3xl text-white'>Projects</h4>

        <p className='py-4 text-center text-text-muted'>My recent work</p>

        {/* Projects grid */}
        <div className='mx-auto mt-6 grid max-w-384 grid-cols-1 justify-items-center gap-6 px-4 sm:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          <ProjectCard
            image='https://i.imgur.com/hrYjGo7.jpeg'
            live='https://22ai.app'
            name='22AI'
            projectDesc='22AI is a fast, multilingual AI chat platform with flexible model choices, shared conversations, and productivity-first workflows.'
            // github='https://github.com/PedroL22/22ai'
            skills='OpenRouter NextJS Framer Motion'
          />

          <ProjectCard
            github='https://github.com/PedroL22/OnSpot-RSVP'
            image='https://i.imgur.com/KhYEDRc.png'
            live='https://on-spot-rsvp.vercel.app/'
            name='OnSpot RSVP'
            projectDesc='A lightweight event RSVP and check-in app. The smallest useful version of "the simplest possible Partiful".'
            skills='NextJS Prisma Better Auth Tailwind'
          />

          <ProjectCard
            github='https://github.com/PedroL22/black-studios'
            image='https://user-images.githubusercontent.com/40894497/262020753-890958c0-2ea1-4cd1-9154-dc2c4ba94224.png'
            live='https://black-studios.vercel.app/'
            name='Black Studios'
            projectDesc='A portfolio website created with Next JS, Tailwind CSS and Framer Motion.'
            skills='NextJS Tailwind Framer Motion'
          />

          <ProjectCard
            github='https://github.com/PedroL22/Custom-Marco-Guillermo'
            image='https://user-images.githubusercontent.com/40894497/271020998-6ecd6a35-1eef-4a76-acb6-0b3bcb07da66.png'
            live='https://custom-marco-guillermo.vercel.app/'
            name='Custom Marco Guillermo'
            projectDesc='Custom Marco Guillermo website made with Next JS and Tailwind CSS.'
            skills='NextJS Tailwind'
          />

          <ProjectCard
            github='https://github.com/PedroL22/Next-JS-Social-Network'
            image='https://user-images.githubusercontent.com/40894497/206275586-7bd956a7-c2a5-478e-bae0-cb0ae098a1d9.jpg'
            name='Next JS Social Network'
            projectDesc='A Next JS social network prototype built with Tailwind CSS, Daisy UI and Prisma.'
            skills='NextJS Prisma Tailwind Daisy UI'
          />

          <ProjectCard
            github='https://github.com/PedroL22/React-Native-Country-Flags-Search'
            image='https://user-images.githubusercontent.com/40894497/201456268-ee5950ed-e696-4755-b3a8-04718c1f8d75.jpg'
            live='https://github.com/PedroL22/React-Native-Country-Flags-Search/releases'
            name='Mobile Country Flags Search'
            projectDesc='Mobile version of Country Flags Search made with React Native, Expo and Native Base.'
            skills='React Native Expo Native Base'
          />

          <ProjectCard
            github='https://github.com/PedroL22/Country-Flags-Search'
            image='https://user-images.githubusercontent.com/40894497/194392787-682d99dc-ad31-49a6-8213-036261518ab1.jpg'
            name='Country Flag Search'
            projectDesc='A website for country searching made with React JS, Tailwind CSS and Tanstack Query.'
            skills='ReactJS API JavaScript Tailwind HTML'
          />

          <ProjectCard
            github='https://github.com/PedroL22/Pokemon-Search'
            image='https://user-images.githubusercontent.com/40894497/219380777-9b8bda85-7496-485b-8374-f0c659473765.png'
            live='https://pokemon-list-search.vercel.app/'
            name='Pokémon Search'
            projectDesc='A modern website for Pokémon searching made with Next JS, React JS, Tanstack Query and Styled Components.'
            skills='ReactJS API Styled Components'
          />

          <ProjectCard
            github='https://github.com/PedroL22/The-News-Website'
            image='https://user-images.githubusercontent.com/40894497/193134525-37adbf5a-f7a4-4199-a15f-bfacdcd35fc8.jpg'
            name='The News Website'
            projectDesc="A news website made with The Guardian API, Next JS, Tanstack Query, and Tailwind CSS based on Globo's G1."
            skills='NextJS API Tanstack Query Tailwind'
          />

          <ProjectCard
            github='https://github.com/PedroL22/Django-Social-Network'
            image='https://user-images.githubusercontent.com/40894497/186735837-58588ed4-3130-4ce6-9a08-ce62a63c456a.jpg'
            name='Django Social Network'
            projectDesc='Just a basic social media prototype made with Django.'
            skills='Django Python HTML CSS'
          />
        </div>
      </section>
    </main>
  )
}
