import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='flex h-[25vh] items-center justify-between bg-gradient-to-br from-tertiary to-secondary px-[5vw] max-[450px]:block max-[450px]:h-fit 2xl:px-[28vw]'>
      <div className='max-[450px]:pt-[5vh] max-[450px]:text-center'>
        <a href='/' className='text-white no-underline'>
          <h1 className='whitespace-nowrap font-normal text-[24px] text-white capitalize'>pedro lucena</h1>
        </a>
      </div>
      <div>
        <ul className='flex p-0 max-[450px]:mx-auto max-[450px]:w-[50vw]'>
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
        <p className='pb-[5vh] text-text-muted normal-case max-[450px]:text-center'>
          Made with <span className='text-[#dc143c]'>♥</span> by{' '}
          <a href='https://github.com/PedroL22/' target='_blank' rel='noreferrer' className='text-white no-underline'>
            Pedro Lucena
          </a>
        </p>
      </div>
    </footer>
  )
}
