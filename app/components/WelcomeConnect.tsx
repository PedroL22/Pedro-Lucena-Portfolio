'use client'

import { FC } from 'react'

import { ArrowCircleRight } from '@phosphor-icons/react'

export const WelcomeConnect: FC = () => {
  return (
    <button
      aria-label="Let's connect!"
      className='flex cursor-pointer select-none items-center space-x-2'
    >
      <p
        aria-hidden
        className='connect-text text-2xl'
      >
        Let&#39;s connect!
      </p>

      <ArrowCircleRight
        size={32}
        aria-hidden
      />
    </button>
  )
}
