import React from 'react';
import './styles.css';
import icon1 from '../../assets/images/nav-icon1.svg';
import icon2 from '../../assets/images/nav-icon2.png';
import icon3 from '../../assets/images/nav-icon3.png';

function NavBar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">
            <h1>pedro lucena</h1>
          </a>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
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
              <a href="">
                <img src={icon3} alt="https://twitter.com/lucena_l22/" target="_blank" />
              </a>
            </li>
            <li>
              <a href="#hire">
                <button>hire me</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
