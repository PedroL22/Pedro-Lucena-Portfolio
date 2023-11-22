'use client'

import Link from 'next/link'
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
      className='fixed flex h-24 w-full select-none items-center justify-center bg-primaryDark text-gray-50 lg:bg-transparent lg:data-[transparent=true]:backdrop-blur-md'
    >
      <nav className='flex h-24 w-full max-w-screen-2xl items-center justify-between p-12'>
        <Link
          href='/'
          className='text-2xl'
        >
          Pedro Lucena
        </Link>

        <MobileHeader />
        <DesktopHeader />
      </nav>
    </header>
  )
}
