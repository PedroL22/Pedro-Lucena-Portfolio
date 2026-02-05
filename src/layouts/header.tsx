'use client'

import Image from 'next/image'
import type { KeyboardEvent } from 'react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const headerVariants = tv({
  base: [
    'fixed top-0 inset-x-0 z-10 h-24',
    'transition-all duration-200',
    // On mobile always solid
    'bg-secondary md:bg-transparent',
  ],
  variants: {
    theme: {
      transparent: 'md:bg-transparent',
      scrolled: 'md:bg-black/50 md:backdrop-blur-md',
    },
    mobile: {
      closed: '',
      open: 'bg-secondary',
    },
  },
  defaultVariants: {
    theme: 'transparent',
    mobile: 'closed',
  },
})

const headerWrapperClasses = 'flex h-full max-w-[1536px] mx-auto items-center justify-between px-8 md:px-10'

const headerMenuVariants = tv({
  base: [
    'flex gap-8 text-text-muted transition-all duration-300',
    'fixed top-0 -right-full md:static md:right-auto',
    'h-auto w-full flex-col md:h-auto md:w-auto md:flex-row',
    'items-center bg-secondary md:bg-transparent',
    'pt-16 pb-[100vh] md:p-0',
  ],
  variants: {
    mobile: {
      closed: '',
      open: 'right-0 md:right-auto',
    },
  },
  defaultVariants: {
    mobile: 'closed',
  },
})

const headerMenuItemClasses = 'cursor-pointer capitalize transition-all hover:text-white'

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

  const keyHandler = (e: KeyboardEvent, callback: () => void) => {
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

  const mobileState = active ? 'open' : 'closed'
  const themeState = darkHeader ? 'scrolled' : 'transparent'

  return (
    <header data-slot='header' className={twMerge(headerVariants({ theme: themeState, mobile: mobileState }))}>
      <div data-slot='header-wrapper' className={twMerge(headerWrapperClasses)}>
        <a
          href='/'
          onClick={(e) => {
            e.preventDefault()
            topAndClose()
          }}
          onKeyDown={(e) => keyHandler(e, topAndClose)}
          className='text-white no-underline'
          data-slot='header-brand'
        >
          <h1 className='whitespace-nowrap text-2xl text-white'>Pedro Lucena</h1>
        </a>

        <nav data-slot='header-nav'>
          <ul data-slot='header-menu' className={twMerge(headerMenuVariants({ mobile: mobileState }))}>
            <li
              onClick={topAndClose}
              onKeyDown={(e) => keyHandler(e, topAndClose)}
              tabIndex={0}
              className={twMerge(headerMenuItemClasses)}
            >
              <a href='/' onClick={(e) => e.preventDefault()} className='text-inherit no-underline'>
                home
              </a>
            </li>

            <li
              onClick={() => scrollToSection('skills-section')}
              onKeyDown={(e) => keyHandler(e, () => scrollToSection('skills-section'))}
              tabIndex={0}
              className={twMerge(headerMenuItemClasses)}
            >
              skills
            </li>

            <li
              onClick={() => scrollToSection('projects-section')}
              onKeyDown={(e) => keyHandler(e, () => scrollToSection('projects-section'))}
              tabIndex={0}
              className={twMerge(headerMenuItemClasses)}
            >
              projects
            </li>

            <li className={twMerge(headerMenuItemClasses)}>
              <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className='text-inherit no-underline'>
                resume
              </a>
            </li>

            <ul className='flex gap-8' data-slot='header-social'>
              <li>
                <a
                  href='https://www.linkedin.com/in/pedrolucena22/'
                  target='_blank'
                  rel='noreferrer'
                  className='transition-all hover:opacity-80'
                >
                  <Image src='/images/nav-icon.png' alt='linkedin icon' width={22} height={22} />
                </a>
              </li>

              <li>
                <a
                  href='https://github.com/PedroL22/'
                  target='_blank'
                  rel='noreferrer'
                  className='transition-all hover:opacity-80'
                >
                  <Image src='/images/nav-icon2.png' alt='github icon' width={22} height={22} />
                </a>
              </li>

              <li>
                <a
                  href='https://x.com/lucena_l22/'
                  target='_blank'
                  rel='noreferrer'
                  className='transition-all hover:opacity-80'
                >
                  <Image src='/images/nav-icon3.svg' alt='x icon' width={22} height={22} />
                </a>
              </li>
            </ul>
          </ul>
        </nav>

        <button
          type='button'
          aria-label={active ? 'Close navigation menu' : 'Open navigation menu'}
          className='block cursor-pointer md:hidden'
          onClick={hamburger}
          data-slot='header-menu-toggle'
        >
          <span
            className={twMerge(
              'mb-1.5 block h-0.5 w-6 bg-white transition-all duration-300',
              active ? 'translate-y-2 rotate-45' : ''
            )}
          />
          <span
            className={twMerge(
              'mb-1.5 block h-0.5 w-6 bg-white transition-all duration-300',
              active ? 'opacity-0' : ''
            )}
          />
          <span
            className={twMerge(
              'block h-0.5 w-6 bg-white transition-all duration-300',
              active ? '-translate-y-2 -rotate-45' : ''
            )}
          />
        </button>
      </div>
    </header>
  )
}
