'use client'

import { ReactTyped } from 'react-typed'

export const TypedStrings = () => {
  return (
    <ReactTyped
      backSpeed={60}
      loop
      strings={['Full-Stack', 'React', 'React Native', 'Front-End', 'Back-End', 'TypeScript']}
      typeSpeed={50}
    />
  )
}
