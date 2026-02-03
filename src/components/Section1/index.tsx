'use client'

import { ReactTyped } from 'react-typed'

export const Section1 = () => {
  const startYear = 2022
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - startYear

  return (
    <section className='mt-[100px] h-screen w-full overflow-x-hidden' id='section1'>
      <div className='absolute top-[55%] -translate-y-1/2 px-[5vw] text-white max-[600px]:pt-[100px] max-[670px]:pt-[150px] 2xl:px-[28vw]'>
        <h2 className='w-fit whitespace-nowrap border-2 border-teal bg-gradient-to-r from-primary to-teal p-2.5 font-medium max-[600px]:mx-auto max-[600px]:mb-[30px] max-[600px]:max-w-fit'>
          Welcome to my Portfolio
        </h2>

        <h1 className='font-semibold text-[60px] max-[600px]:mx-auto max-[600px]:text-center max-[600px]:text-[50px] max-[670px]:text-[50px]'>
          Hi! I&#39;m Pedro Lucena <br />
          <ReactTyped
            strings={['Full Stack', 'React', 'React Native', 'Front-End', 'Back-End']}
            typeSpeed={50}
            backSpeed={60}
            loop
            className='font-normal'
          />
          <br className='hidden max-[600px]:block' /> Developer
        </h1>

        <p className='max-w-[650px] py-[15px] font-normal text-text-muted normal-case max-[600px]:mx-auto max-[600px]:max-w-max max-[600px]:text-center'>
          Full Stack Developer with {yearsOfExperience} years of experience building production fintech systems in
          Switzerland using TypeScript, React, Node.js, and modern web technologies.
        </p>
      </div>
    </section>
  )
}
