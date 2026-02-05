import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const footerVariants = tv({
  base: ['h-56 bg-linear-to-r from-secondary to-tertiary'],
})

const footerWrapperClasses =
  'flex h-full max-w-[1536px] mx-auto items-center justify-between px-10 max-[450px]:flex-col max-[450px]:justify-center max-[450px]:space-y-7'

const footerSocialLinkClasses = 'transition-opacity hover:opacity-80'

export const Footer = () => {
  return (
    <footer data-slot='footer' className={twMerge(footerVariants())}>
      <div data-slot='footer-wrapper' className={twMerge(footerWrapperClasses)}>
        <a
          href='/'
          data-slot='footer-brand'
          className='whitespace-nowrap text-2xl text-white no-underline max-[450px]:text-center'
        >
          Pedro Lucena
        </a>

        <div className='flex flex-col space-y-6 max-[450px]:items-center max-[450px]:space-y-7'>
          <ul className='flex justify-around max-[450px]:w-[50vw]' data-slot='footer-social'>
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

          <p className='font-light text-text-muted max-[450px]:text-center'>
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
