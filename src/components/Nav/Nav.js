import React, { useContext } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Nav.scss'
import NavContext from '../../context/nav/navContext'

function Nav() {
  const navContext = useContext(NavContext)
  const { navIsOpened } = navContext

  return (
    <>
      <nav className={navIsOpened ? 'nav-opened' : 'nav-closed'}>
        <div className="nav__wrapper">
          <AniLink
            to="/"
            className="nav__link"
            activeStyle={{ color: '#f34444' }}
            fade
          >
            Главная
          </AniLink>
          <AniLink
            to="/food"
            className="nav__link"
            activeStyle={{ color: '#f34444' }}
            fade
          >
            Блюда
          </AniLink>
          <AniLink
            to="/drinks"
            className="nav__link"
            activeStyle={{ color: '#f34444' }}
            fade
          >
            Напитки
          </AniLink>
          <div className="nav__address">
            <span>
              Тула проспект Ленина 85
              <br />
              корпус 1 вход 5
            </span>
            <a href="tel:+74872770247">+7 4872 77 02 47</a>
          </div>

          <div className="nav__working-time">
            <span>воскресенье - четверг: 12:00 - 24:00</span>
            <span>пятница - суббота: 12:00 - 02:00</span>
          </div>
          <div className="nav__social">
            {/* <span>
              <a
                href="https://www.facebook.com/Angel-8-2123834887946466/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </span>{' '} */}
            <span>
              <a
                href="https://www.instagram.com/angel_bar_grill/?hl=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
