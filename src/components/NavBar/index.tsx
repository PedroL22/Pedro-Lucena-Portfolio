import { useState } from 'react'
import { Link, animateScroll } from 'react-scroll'

import icon1 from '~/assets/images/nav-icon.png'
import icon2 from '~/assets/images/nav-icon2.png'
import icon3 from '~/assets/images/nav-icon3.png'
import './styles.css'

import { NavButton } from './NavButton'

type NavBarProps = {
  dark: boolean
}

export const NavBar = ({ dark }: NavBarProps) => {
  const [active, setActive] = useState('header-right')
  const [toggleIcon, setToggleIcon] = useState('hamburger')

  const keyHandler = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      callback()
    }
  }

  const hamburger = () => {
    active === 'header-right' ? setActive('header-right header-right-active') : setActive('header-right')
    toggleIcon === 'hamburger' ? setToggleIcon('hamburger hamburgerx') : setToggleIcon('hamburger')
  }
  const handleClick = () => {
    setActive('header-right')
    setToggleIcon('hamburger')
  }
  const topAndClose = () => {
    animateScroll.scrollToTop()
    handleClick()
  }

  const handleClick2 = () => {
    animateScroll.scrollTo(10000, { smooth: true, duration: 500 })
    setActive('header-right')
    setToggleIcon('hamburger')
  }

  return (
    <nav className={dark ? 'dark' : ''}>
      <div className='logo'>
        <a href='/' onClick={topAndClose} onKeyDown={(e) => keyHandler(e, topAndClose)}>
          <h1>pedro lucena</h1>
        </a>
      </div>

      <div className='div2'>
        <ul className={active}>
          <li onClick={topAndClose} onKeyDown={(e) => keyHandler(e, topAndClose)} tabIndex={0}>
            <a href='/'>home</a>
          </li>

          <li onClick={handleClick} onKeyDown={(e) => keyHandler(e, handleClick)} tabIndex={0}>
            <Link to='section2' offset={-100} smooth duration={500} onClick={handleClick}>
              skills
            </Link>
          </li>

          <li onClick={handleClick} onKeyDown={(e) => keyHandler(e, handleClick)} tabIndex={0}>
            <Link to='section3' offset={-100} smooth duration={500} onClick={handleClick}>
              projects
            </Link>
          </li>

          <ul className='icons'>
            <li>
              <a href='https://www.linkedin.com/in/pedrolucena22/' target='_blank' rel='noreferrer'>
                <img src={icon1} alt='linkedin icon' />
              </a>
            </li>

            <li>
              <a href='https://github.com/PedroL22/' target='_blank' rel='noreferrer'>
                <img src={icon2} alt='github icon' />
              </a>
            </li>

            <li>
              <a href='https://twitter.com/lucena_l22/' target='_blank' rel='noreferrer'>
                <img src={icon3} alt='twitter icon' />
              </a>
            </li>
          </ul>

          <li
            onClick={handleClick2}
            onKeyDown={(e) => keyHandler(e, handleClick2)}
            className='button-connect'
            tabIndex={0}
          >
            <NavButton onClick={handleClick2} text="Let's Connect" />
          </li>
        </ul>
      </div>

      <div className={toggleIcon} onClick={hamburger} onKeyDown={(e) => keyHandler(e, hamburger)} tabIndex={0}>
        <span className='bar' />
        <span className='bar' />
        <span className='bar' />
      </div>
    </nav>
  )
}
