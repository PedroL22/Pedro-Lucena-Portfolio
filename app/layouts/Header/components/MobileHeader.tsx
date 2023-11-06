'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'

import { GithubLogo, LinkedinLogo, List, TwitterLogo, X } from '@phosphor-icons/react'
import { ConnectButton } from '.'

export const MobileHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.5 }}
        transition={{ duration: 0.25, delay: 0, ease: 'easeOut' }}
        className='z-20 text-gray-50 lg:hidden'
      >
        {isOpen ? (
          <X
            size={28}
            weight='bold'
            onClick={() => setIsOpen(false)}
            className='cursor-pointer'
          />
        ) : (
          <List
            size={28}
            weight='fill'
            onClick={() => setIsOpen(true)}
            className='cursor-pointer'
          />
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0, ease: 'easeOut' }}
            className='fixed bottom-0 left-0 z-10 flex h-screen w-screen select-none flex-col items-center justify-center space-y-10 bg-transparent pt-5 backdrop-blur-md'
          >
            <Link
              href='/'
              onClick={() => setIsOpen(false)}
              className={`${pathname == '/' && 'text-gray-400'} text-lg`}
            >
              Home
            </Link>

            <Link
              href='/skills'
              onClick={() => setIsOpen(false)}
              className={`${pathname == '/skills' && 'text-gray-400'} text-lg`}
            >
              Skills
            </Link>

            <Link
              href='/projects'
              onClick={() => setIsOpen(false)}
              className={`${pathname == '/projects' && 'text-gray-400'} text-lg`}
            >
              Projects
            </Link>

            <div className='flex items-center space-x-7'>
              <a
                href='https://www.linkedin.com/in/pedrolucena22/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedinLogo size={28} />
              </a>

              <a
                href='https://github.com/PedroL22/'
                target='_blank'
                rel='noreferrer'
              >
                <GithubLogo size={28} />
              </a>

              <a
                href='https://twitter.com/lucena_l22/'
                target='_blank'
                rel='noreferrer'
              >
                <TwitterLogo size={28} />
              </a>
            </div>

            <ConnectButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
