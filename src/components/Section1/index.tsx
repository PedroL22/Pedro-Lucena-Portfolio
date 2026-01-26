import { ReactTyped } from 'react-typed'

import './styles.css'

export const Section1 = () => {
  const startYear = 2022
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - startYear

  return (
    <section className='section1' id='section1'>
      <div className='text'>
        <h2 className='welcome'>Welcome to my Portfolio</h2>

        <h1>
          Hi! I&#39;m Pedro Lucena <br />
          <ReactTyped
            strings={['Full Stack', 'React', 'React Native', 'Front-End', 'Back-End']}
            typeSpeed={50}
            backSpeed={60}
            loop
            className='typed'
          />
          <br className='breakline' /> Developer
        </h1>

        <p>
          Full Stack Developer with {yearsOfExperience} years of experience building production fintech systems in
          Switzerland using TypeScript, React, Node.js, and modern web technologies.
        </p>
      </div>
    </section>
  )
}
