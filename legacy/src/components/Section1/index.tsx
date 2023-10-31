import { animateScroll } from 'react-scroll'
import Typed from 'react-typed'

import './styles.css'
import rightArrow from '../../assets/images/right-arrow.png'

export const Section1 = () => {
  const handleClick2 = () => {
    animateScroll.scrollTo(5000, { smooth: true, duration: 500 })
  }

  return (
    <section
      className='section1'
      id='section1'
    >
      <div className='text'>
        <h2 className='welcome'>Welcome to my Portfolio</h2>
        <h1>
          Hi! I&#39;m Pedro Lucena <br />
          <Typed
            strings={['Front-End', 'React', 'React Native']}
            typeSpeed={50}
            backSpeed={60}
            loop
            className='typed'
          />
          <br className='breakline' /> Developer
        </h1>
        <p>
          Hi, my name is Pedro, I&#39;m a 20 years old Front-End Developer with
          a focus on TypeScript/JavaScript. Having more than 20 projects and 5
          years of practice, I have experience with Front-End and Mobile
          development.
        </p>
        <div
          className='connect'
          onClick={handleClick2}
        >
          <h2 className='connect-text'>Let&#39;s connect!</h2>
          <img
            src={rightArrow}
            alt='arrow'
          />
        </div>
      </div>
    </section>
  )
}
