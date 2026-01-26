import './styles.css'

import { Grid1 } from './Grid1'
import { Grid2 } from './Grid2'
import { Grid3 } from './Grid3'

export const Section2 = () => {
  return (
    <section className='section2' id='section2'>
      <div className='square'>
        <h1>Skills</h1>

        <p className='description'>What skills do I have?</p>

        <div className='wrapper'>
          <div className='frontend'>
            <Grid1 />
          </div>

          <div className='backend'>
            <Grid2 />
          </div>

          <div className='devops'>
            <Grid3 />
          </div>
        </div>
      </div>
    </section>
  )
}
