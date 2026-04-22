import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const footerVariants = tv({
  base: ['h-56 bg-linear-to-r from-secondary to-tertiary'],
})

const footerWrapperClasses =
  'flex h-full max-w-[1536px] mx-auto flex-col items-center justify-center space-y-7 px-10 sm:flex-row sm:justify-between sm:space-y-0'

const footerSocialLinkClasses = 'transition-all hover:opacity-80'

export const Footer = () => {
  return (
    <footer className={twMerge(footerVariants())} data-slot='footer'>
      <div className={twMerge(footerWrapperClasses)} data-slot='footer-wrapper'>
        <a
          className='whitespace-nowrap text-center text-2xl text-white no-underline sm:text-left'
          data-slot='footer-brand'
          href='/'
        >
          Pedro Lucena
        </a>

        <div className='flex flex-col items-center space-y-7 sm:items-end sm:space-y-6'>
          <ul className='flex w-[50vw] justify-around sm:w-auto sm:gap-8' data-slot='footer-social'>
            <li>
              <a
                className={twMerge(footerSocialLinkClasses)}
                href='https://www.linkedin.com/in/pedrolucena22/'
                rel='noreferrer'
                target='_blank'
              >
                <Image alt='linkedin icon' height={22} src='/images/nav-icon.png' width={22} />
              </a>
            </li>

            <li>
              <a
                className={twMerge(footerSocialLinkClasses)}
                href='https://github.com/PedroL22/'
                rel='noreferrer'
                target='_blank'
              >
                <Image alt='github icon' height={22} src='/images/nav-icon2.png' width={22} />
              </a>
            </li>

            <li>
              <a
                className={twMerge(footerSocialLinkClasses)}
                href='https://x.com/lucena_l22/'
                rel='noreferrer'
                target='_blank'
              >
                <Image alt='x icon' height={22} src='/images/nav-icon3.svg' width={22} />
              </a>
            </li>
          </ul>

          <p className='text-center font-light text-text-muted sm:text-right'>
            Made with <span className='text-[#dc143c]'>♥</span> by{' '}
            <a className='text-white no-underline' href='https://github.com/PedroL22/' rel='noreferrer' target='_blank'>
              Pedro Lucena
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
