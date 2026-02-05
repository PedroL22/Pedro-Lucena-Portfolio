'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [darkHeader, setDarkHeader] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setDarkHeader(true)
      } else {
        setDarkHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  const keyHandler = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      callback()
    }
  }

  const hamburger = () => {
    setActive(!active)
  }

  const handleClick = () => {
    setActive(false)
  }

  const topAndClose = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    handleClick()
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
    handleClick()
  }

  return (
    <nav
      className={`fixed top-0 left-0 z-10 flex h-[100px] w-screen items-center justify-between px-[5vw] transition-all duration-200 max-[840px]:px-[30px] 2xl:px-[18vw] ${
        darkHeader ? 'bg-black/50 backdrop-blur-[10px]' : 'bg-transparent'
      } ${active ? 'max-[840px]:bg-secondary' : ''}`}
    >
      <div>
        <a
          href='/'
          onClick={(e) => {
            e.preventDefault()
            topAndClose()
          }}
          onKeyDown={(e) => keyHandler(e, topAndClose)}
          className='text-white no-underline'
        >
          <h1 className='whitespace-nowrap font-normal text-white capitalize'>pedro lucena</h1>
        </a>
      </div>

      <div className='pt-4'>
        <ul
          className={`flex text-text-muted transition-all duration-300 max-[840px]:fixed max-[840px]:top-0 max-[840px]:-right-full max-[840px]:h-auto max-[840px]:w-full max-[840px]:flex-col max-[840px]:items-center max-[840px]:bg-secondary max-[840px]:pt-[70px] max-[840px]:pb-[100vh] ${
            active ? 'max-[840px]:right-0' : ''
          }`}
        >
          <li
            onClick={topAndClose}
            onKeyDown={(e) => keyHandler(e, topAndClose)}
            tabIndex={0}
            className='cursor-pointer px-2.5 py-[15px] capitalize transition-colors hover:text-white'
          >
            <a href='/' onClick={(e) => e.preventDefault()} className='text-inherit no-underline'>
              home
            </a>
          </li>

          <li
            onClick={() => scrollToSection('section2')}
            onKeyDown={(e) => keyHandler(e, () => scrollToSection('section2'))}
            tabIndex={0}
            className='cursor-pointer px-2.5 py-[15px] capitalize transition-colors hover:text-white'
          >
            skills
          </li>

          <li
            onClick={() => scrollToSection('section3')}
            onKeyDown={(e) => keyHandler(e, () => scrollToSection('section3'))}
            tabIndex={0}
            className='cursor-pointer px-2.5 py-[15px] capitalize transition-colors hover:text-white'
          >
            projects
          </li>

          <ul className='flex p-0'>
            <li className='px-2.5 py-[15px]'>
              <a
                href='https://www.linkedin.com/in/pedrolucena22/'
                target='_blank'
                rel='noreferrer'
                className='transition-opacity hover:opacity-80'
              >
                <Image src='/images/nav-icon.png' alt='linkedin icon' width={22} height={22} />
              </a>
            </li>

            <li className='px-2.5 py-[15px]'>
              <a
                href='https://github.com/PedroL22/'
                target='_blank'
                rel='noreferrer'
                className='transition-opacity hover:opacity-80'
              >
                <Image src='/images/nav-icon2.png' alt='github icon' width={22} height={22} />
              </a>
            </li>

            <li className='px-2.5 py-[15px]'>
              <a
                href='https://x.com/lucena_l22/'
                target='_blank'
                rel='noreferrer'
                className='transition-opacity hover:opacity-80'
              >
                <Image src='/images/nav-icon3.svg' alt='x icon' width={22} height={22} />
              </a>
            </li>
          </ul>
        </ul>
      </div>

      <button
        type='button'
        aria-label={active ? 'Close navigation menu' : 'Open navigation menu'}
        className='hidden cursor-pointer max-[840px]:block'
        onClick={hamburger}
      >
        <span
          className={`mb-[5px] block h-[3px] w-[25px] bg-white transition-all duration-300 ${
            active ? 'translate-y-[8px] rotate-45' : ''
          }`}
        />
        <span
          className={`mb-[5px] block h-[3px] w-[25px] bg-white transition-all duration-300 ${
            active ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-[3px] w-[25px] bg-white transition-all duration-300 ${
            active ? 'translate-y-[-8px] -rotate-45' : ''
          }`}
        />
      </button>
    </nav>
  )
}
