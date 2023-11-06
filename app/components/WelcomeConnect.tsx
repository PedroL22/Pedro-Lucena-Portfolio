'use client'

import { FC } from 'react'

import { ArrowCircleRight } from '@phosphor-icons/react'

export const WelcomeConnect: FC = () => {
  return (
    <div
      className='flex cursor-pointer select-none items-center space-x-2'
      // onClick={handleClick2}
    >
      <p className='connect-text text-2xl'>Let&#39;s connect!</p>

      <ArrowCircleRight size={32} />
    </div>
  )
}
