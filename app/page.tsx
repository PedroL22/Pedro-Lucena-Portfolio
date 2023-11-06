import { TypedComponent, WelcomeConnect } from './components'

export default function Home() {
  return (
    <main
      aria-label="Pedro Lucena's Portfolio - Ready to Work!"
      className='flex h-screen w-full items-center justify-center pt-24 text-gray-50'
    >
      <section
        aria-label='Welcome to my portfolio'
        className='h-56 w-full max-w-screen-2xl px-12'
      >
        <div className='flex w-full flex-col items-center space-y-5 md:w-3/4 md:items-start'>
          <h2 className='border-secondaryDark from-secondaryDark w-fit border-2 bg-gradient-to-r to-primary p-2 text-xl font-medium md:p-3 md:text-2xl'>
            Welcome to my portfolio
          </h2>

          <h1 className='flex flex-col text-center text-4xl font-bold md:text-left md:text-6xl'>
            Hi! I&#39;m Pedro Lucena <br />
            <span className='gap-3 md:flex'>
              <TypedComponent />
              <br className='md:hidden' />
              Developer
            </span>
          </h1>

          <p className='text-center text-gray-200 md:text-left'>
            Hi, my name is Pedro, I&#39;m a 20 years old Front-End Developer with a focus on TypeScript/JavaScript.
            Having more than 20 projects and 5 years of practice, I have experience with Front-End and Mobile
            development.
          </p>

          <WelcomeConnect />
        </div>
      </section>
    </main>
  )
}
