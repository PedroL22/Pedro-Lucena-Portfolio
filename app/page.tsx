import { SkillsContainer } from '@/components/Skills'
import { TypedComponent, WelcomeConnect } from '@/components/Welcome'

import { requestSkills } from '@/clients/ContentClient'

export default async function Home() {
  const skillsData = await requestSkills()

  const backendSkills = skillsData.filter((skill) => skill.attributes.type === 'backend')
  const frontendSkills = skillsData.filter((skill) => skill.attributes.type === 'frontend')

  return (
    <main className='flex w-full flex-col items-center pt-24 text-gray-50'>
      <section
        aria-label='Home - Welcome to my portfolio'
        className='flex min-h-[600px] w-full max-w-screen-2xl flex-col justify-center px-5'
      >
        <div className='flex w-full flex-col items-center space-y-5 md:w-3/4 md:items-start'>
          <h2 className='w-fit border-2 border-secondaryDark bg-gradient-to-r from-secondaryDark to-primary p-2 text-xl font-medium md:p-3 md:text-2xl'>
            Welcome to my portfolio
          </h2>

          <h1 className='flex flex-col text-center text-4xl font-bold md:text-left md:text-6xl'>
            Hi! I&#39;m Pedro Lucena <br aria-hidden />
            <span className='gap-3 md:flex'>
              <TypedComponent />
              <br className='md:hidden' />
              Developer
            </span>
          </h1>

          <p className='text-center text-gray-200 md:text-left'>
            Hi, my name is Pedro, I&#39;m a 20 years old Front-End Developer with a focus on TypeScript/JavaScript.
            Having more than 20 projects and 5 years of practice, I have experience with Front-End and Mobile
            development.
          </p>

          <WelcomeConnect />
        </div>
      </section>

      <section
        aria-label='Skills'
        className='mb-20 flex min-h-[600px] w-full max-w-screen-2xl flex-col items-center justify-center px-5'
      >
        <div className='flex w-full flex-col items-center justify-center space-y-12 rounded-[3rem] bg-gradient-to-tr from-primaryLight to-primaryDark px-5 py-16 xl:w-3/4'>
          <div className='space-y-3 text-center'>
            <h3 className='text-2xl'>Skills</h3>

            <p className='text-md text-gray-300'>What skills do I have?</p>
          </div>

          <div className='flex w-full flex-col justify-around gap-6 md:flex-row md:gap-8 md:px-10'>
            <SkillsContainer
              title='Back-End Development'
              skills={backendSkills}
            />

            <SkillsContainer
              title='Front-End Development'
              skills={frontendSkills}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
