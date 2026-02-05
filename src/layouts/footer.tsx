import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='flex h-[25vh] items-center justify-between space-y-6 bg-linear-to-r from-secondary to-tertiary px-[5vw] max-[450px]:h-[30vh] max-[450px]:flex-col max-[450px]:justify-center max-[450px]:space-y-7'>
      <a href='/' className='whitespace-nowrap text-2xl text-white no-underline max-[450px]:text-center'>
        Pedro Lucena
      </a>

      <div className='flex flex-col space-y-6 max-[450px]:items-center max-[450px]:space-y-7'>
        {/* Socials */}
        <ul className='flex justify-around max-[450px]:w-[50vw]'>
          <li>
            <a
              href='https://www.linkedin.com/in/pedrolucena22/'
              target='_blank'
              rel='noreferrer'
              className='transition-opacity hover:opacity-80'
            >
              <Image src='/images/nav-icon.png' alt='linkedin icon' width={22} height={22} />
            </a>
          </li>

          <li>
            <a
              href='https://github.com/PedroL22/'
              target='_blank'
              rel='noreferrer'
              className='transition-opacity hover:opacity-80'
            >
              <Image src='/images/nav-icon2.png' alt='github icon' width={22} height={22} />
            </a>
          </li>

          <li>
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

        <p className='font-light text-text-muted max-[450px]:text-center'>
          Made with <span className='text-[#dc143c]'>♥</span> by{' '}
          <a href='https://github.com/PedroL22/' target='_blank' rel='noreferrer' className='text-white no-underline'>
            Pedro Lucena
          </a>
        </p>
      </div>
    </footer>
  )
}
