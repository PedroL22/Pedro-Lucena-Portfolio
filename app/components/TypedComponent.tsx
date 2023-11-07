'use client'

import { FC } from 'react'

import Typed from 'react-typed'

export const TypedComponent: FC = () => {
  return (
    <Typed
      strings={['Front-End', 'React', 'React Native']}
      typeSpeed={50}
      backSpeed={60}
      loop
      className='whitespace-nowrap font-medium'
    />
  )
}
