'use client'

import { ReactTyped } from 'react-typed'

export const TypedStrings = () => {
  return (
    <ReactTyped
      strings={['Full Stack', 'React', 'React Native', 'Front-End', 'Back-End']}
      typeSpeed={50}
      backSpeed={60}
      loop
      className='font-normal'
    />
  )
}
