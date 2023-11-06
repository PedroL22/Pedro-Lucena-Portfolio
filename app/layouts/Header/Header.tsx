'use client'

import { FC, useEffect, useState } from 'react'

import { DesktopHeader, MobileHeader } from './components'

export const Header: FC = () => {
  const [transparentHeader, setTransparentHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setTransparentHeader(true)
      } else {
        setTransparentHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <header
      data-transparent={transparentHeader}
      className='fixed flex h-24 w-full items-center justify-center bg-secondary text-zinc-50 md:bg-transparent md:data-[transparent=true]:backdrop-blur-md'
    >
      <nav className='flex h-24 w-full max-w-screen-2xl items-center justify-between p-7'>
        <p className='text-2xl'>Pedro Lucena</p>

        <MobileHeader />
        <DesktopHeader />
      </nav>
    </header>
  )
}
