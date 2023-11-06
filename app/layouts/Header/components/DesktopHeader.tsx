'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { GithubLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import { ConnectButton } from '.'

export const DesktopHeader: FC = () => {
  const pathname = usePathname()

  return (
    <div className='hidden items-center space-x-10 lg:flex'>
      <Link
        href='/'
        className={
          pathname == '/'
            ? 'text-gray-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Home
      </Link>

      <Link
        href='/skills'
        className={
          pathname == '/skills'
            ? 'text-gray-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Skills
      </Link>

      <Link
        href='/projects'
        className={
          pathname == '/projects'
            ? 'text-gray-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Projects
      </Link>

      <div className='flex items-center space-x-7'>
        <a
          href='https://www.linkedin.com/in/pedrolucena22/'
          target='_blank'
          rel='noreferrer'
          className='group cursor-pointer'
        >
          <LinkedinLogo
            size={28}
            weight='regular'
            className='flex group-hover:hidden'
          />

          <LinkedinLogo
            size={28}
            weight='fill'
            className='hidden group-hover:flex'
          />
        </a>

        <a
          href='https://github.com/PedroL22/'
          target='_blank'
          rel='noreferrer'
          className='group cursor-pointer'
        >
          <GithubLogo
            size={28}
            weight='regular'
            className='flex group-hover:hidden'
          />

          <GithubLogo
            size={28}
            weight='fill'
            className='hidden group-hover:flex'
          />
        </a>

        <a
          href='https://twitter.com/lucena_l22/'
          target='_blank'
          rel='noreferrer'
          className='group cursor-pointer'
        >
          <TwitterLogo
            size={28}
            weight='regular'
            className='flex group-hover:hidden'
          />

          <TwitterLogo
            size={28}
            weight='fill'
            className='hidden group-hover:flex'
          />
        </a>
      </div>

      <ConnectButton />
    </div>
  )
}
