'use client'

import Image from 'next/image'
import Link from 'next/link'
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

  const mobileState = active ? 'open' : 'closed'
  const themeState = darkHeader ? 'scrolled' : 'transparent'

  return (
    <header className={twMerge(headerVariants({ theme: themeState, mobile: mobileState }))} data-slot='header'>
      <div className={twMerge(headerWrapperClasses)} data-slot='header-wrapper'>
        <Link
          className='text-white no-underline'
          data-slot='header-brand'
          href='/'
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault()
              topAndClose()
            }
          }}
        >
          <p className='whitespace-nowrap text-2xl text-white'>Pedro Lucena</p>
        </Link>

        <nav data-slot='header-nav'>
          <ul className={twMerge(headerMenuVariants({ mobile: mobileState }))} data-slot='header-menu'>
            <li className={twMerge(headerMenuItemClasses)}>
              <Link
                className='text-inherit no-underline'
                href='/'
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault()
                    topAndClose()
                  } else {
                    handleClick()
                  }
                }}
              >
                home
              </Link>
            </li>

            <li className={twMerge(headerMenuItemClasses)}>
              <Link className='text-inherit no-underline' href='#skills' onClick={handleClick}>
                skills
              </Link>
            </li>

            <li className={twMerge(headerMenuItemClasses)}>
              <Link className='text-inherit no-underline' href='#projects' onClick={handleClick}>
                projects
              </Link>
            </li>

            <li className={twMerge(headerMenuItemClasses)}>
              <a className='text-inherit no-underline' href='/resume.pdf' rel='noopener noreferrer' target='_blank'>
                resume
              </a>
            </li>

            <ul className='flex gap-8' data-slot='header-social'>
              <li>
                <a
                  className='transition-all hover:opacity-80'
                  href='https://www.linkedin.com/in/pedrolucena22/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image alt='linkedin icon' height={22} src='/images/nav-icon.png' width={22} />
                </a>
              </li>

              <li>
                <a
                  className='transition-all hover:opacity-80'
                  href='https://github.com/PedroL22/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image alt='github icon' height={22} src='/images/nav-icon2.png' width={22} />
                </a>
              </li>

              <li>
                <a
                  className='transition-all hover:opacity-80'
                  href='https://x.com/lucena_l22/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image alt='x icon' height={22} src='/images/nav-icon3.svg' width={22} />
                </a>
              </li>
            </ul>
          </ul>
        </nav>

        <button
          aria-label={active ? 'Close navigation menu' : 'Open navigation menu'}
          className='block cursor-pointer md:hidden'
          data-slot='header-menu-toggle'
          onClick={hamburger}
          type='button'
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
