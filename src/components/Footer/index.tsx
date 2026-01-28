import icon1 from '~/assets/images/nav-icon.png'
import icon2 from '~/assets/images/nav-icon2.png'
import icon3 from '~/assets/images/nav-icon3.svg'
import './styles.css'

export const Footer = () => {
  return (
    <footer>
      <div className='footer-logo'>
        <a href='/'>
          <h1>pedro lucena</h1>
        </a>
      </div>
      <div>
        <ul>
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
            <a href='https://x.com/lucena_l22/' target='_blank' rel='noreferrer'>
              <img src={icon3} alt='x icon' />
            </a>
          </li>
        </ul>
        <p>
          Made with <span className='heart'>♥</span> by{' '}
          <a href='https://github.com/PedroL22/' target='_blank' rel='noreferrer'>
            Pedro Lucena
          </a>
        </p>
      </div>
    </footer>
  )
}
