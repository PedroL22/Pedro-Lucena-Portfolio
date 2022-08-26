import React, { useState } from 'react';
import './styles.css';
import icon1 from '../../assets/images/nav-icon1.svg';
import icon2 from '../../assets/images/nav-icon2.png';
import icon3 from '../../assets/images/nav-icon3.png';
import NavButton from './NavButton/NavButton';

function NavBar() {
  const [active, setActive] = useState('header-right');
  const [toggleIcon, setToggleIcon] = useState('hamburger');
  const hamburger = () => {
    active === 'header-right'
      ? setActive('header-right header-right-active')
      : setActive('header-right');
    toggleIcon === 'hamburger' ? setToggleIcon('hamburger hamburgerx') : setToggleIcon('hamburger');
  };

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <h1>pedro lucena</h1>
        </a>
      </div>
      <div>
        <ul className={active}>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/pedrolucena22/" target="_blank" rel="noreferrer">
                <img src={icon1} alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/PedroL22/" target="_blank" rel="noreferrer">
                <img src={icon2} alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/lucena_l22/" target="_blank" rel="noreferrer">
                <img src={icon3} alt="" />
              </a>
            </li>
          </ul>
          <li>
            <NavButton text="Let's Connect" />
          </li>
        </ul>
      </div>
      <div onClick={hamburger} className={toggleIcon}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  );
}

export default NavBar;
