'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

export const DesktopHeader: FC = () => {
  const pathname = usePathname()

  return (
    <div className='hidden space-x-6 md:flex'>
      <Link
        href='/'
        className={
          pathname == '/'
            ? 'text-zinc-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-zinc-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Home
      </Link>
      <Link
        href='/portfolio'
        className={
          pathname == '/portfolio'
            ? 'text-zinc-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-zinc-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Portfólio
      </Link>
      <Link
        href='/contato'
        className={
          pathname == '/contato'
            ? 'text-zinc-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-zinc-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Contato
      </Link>
    </div>
  )
}
