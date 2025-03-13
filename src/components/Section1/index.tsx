import { animateScroll } from 'react-scroll'
import { ReactTyped } from 'react-typed'

import rightArrow from '~/assets/images/right-arrow.png'
import './styles.css'

export const Section1 = () => {
  const handleClick2 = () => {
    animateScroll.scrollTo(5000, { smooth: true, duration: 500 })
  }

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
          Full Stack Developer expert in JavaScript and TypeScript with 5+ years of experience and a portfolio featuring
          15+ projects.
        </p>

        <div className='connect' onClick={handleClick2} onKeyDown={handleClick2} tabIndex={0}>
          <h2 className='connect-text'>Let&#39;s connect!</h2>

          <img src={rightArrow} alt='arrow' />
        </div>
      </div>
    </section>
  )
}
