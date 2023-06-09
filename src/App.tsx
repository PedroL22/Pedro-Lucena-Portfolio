import { useEffect, useState } from 'react'

import './index.css'

import { NavBar } from './components/NavBar/index'
import { Footer } from './components/Footer/'
import { Section1 } from './components/Section1/index'
import { Section2 } from './components/Section2/index'
import { Section3 } from './components/Section3/index'
import { Section4 } from './components/Section4/index'

export const App = () => {
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
    <div className='App'>
      <NavBar dark={darkHeader} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  )
}
