import { useEffect, useState } from 'react'

import './index.css'

import { Footer } from '~/components/Footer'
import { NavBar } from '~/components/NavBar'
import { Section1 } from '~/components/Section1'
import { Section2 } from '~/components/Section2'
import { Section3 } from '~/components/Section3'

export const Home = () => {
  const [darkHeader, setDarkHeader] = useState(false)

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

  return (
    <div className='Home'>
      <NavBar dark={darkHeader} />

      <Section1 />
      <Section2 />
      <Section3 />

      <Footer />
    </div>
  )
}
