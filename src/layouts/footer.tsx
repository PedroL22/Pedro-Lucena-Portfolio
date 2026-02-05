import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const footerVariants = tv({
  base: ['h-56 bg-linear-to-r from-secondary to-tertiary'],
})

const footerWrapperClasses =
  'flex h-full max-w-[1536px] mx-auto flex-col items-center justify-center space-y-7 px-10 sm:flex-row sm:justify-between sm:space-y-0'

const footerSocialLinkClasses = 'transition-opacity hover:opacity-80'

export const Footer = () => {
  return (
    <footer data-slot='footer' className={twMerge(footerVariants())}>
      <div data-slot='footer-wrapper' className={twMerge(footerWrapperClasses)}>
        <a
          href='/'
          data-slot='footer-brand'
          className='whitespace-nowrap text-center text-2xl text-white no-underline sm:text-left'
        >
          Pedro Lucena
        </a>

        <div className='flex flex-col items-center space-y-7 sm:items-end sm:space-y-6'>
          <ul className='flex w-[50vw] justify-around sm:w-auto sm:gap-8' data-slot='footer-social'>
            <li>
              <a
                href='https://www.linkedin.com/in/pedrolucena22/'
                target='_blank'
                rel='noreferrer'
                className={twMerge(footerSocialLinkClasses)}
              >
                <Image src='/images/nav-icon.png' alt='linkedin icon' width={22} height={22} />
              </a>
            </li>

            <li>
              <a
                href='https://github.com/PedroL22/'
                target='_blank'
                rel='noreferrer'
                className={twMerge(footerSocialLinkClasses)}
              >
                <Image src='/images/nav-icon2.png' alt='github icon' width={22} height={22} />
              </a>
            </li>

            <li>
              <a
                href='https://x.com/lucena_l22/'
                target='_blank'
                rel='noreferrer'
                className={twMerge(footerSocialLinkClasses)}
              >
                <Image src='/images/nav-icon3.svg' alt='x icon' width={22} height={22} />
              </a>
            </li>
          </ul>

          <p className='text-center font-light text-text-muted sm:text-right'>
            Made with <span className='text-[#dc143c]'>♥</span> by{' '}
            <a href='https://github.com/PedroL22/' target='_blank' rel='noreferrer' className='text-white no-underline'>
              Pedro Lucena
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
