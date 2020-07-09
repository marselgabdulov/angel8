import React, { useContext, useState, useEffect, useRef } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Header.scss'
import LogoMobile from './LogoMobile'
import NavContext from '../../context/nav/navContext'
import classnames from 'classnames'
import { window } from 'browser-monads'

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [headerChanged, setHeaderChanged] = useState(false)
  let headerRef = useRef(null)

  function handleScroll() {
    setHeaderChanged(window.pageYOffset > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headerRef])

  const navContext = useContext(NavContext)
  const { navIsOpened, openNav, closeNav } = navContext

  function handleNav() {
    if (navIsOpened) {
      closeNav()
    } else {
      openNav()
    }
  }

  return (
    <div
      className={classnames('header', {
        'header--changed': headerChanged,
      })}
      ref={el => (headerRef = el)}
    >
      <div className="header__wrapper">
        <div className="header__logo">
          <AniLink fade to="/" title="На главную">
            <LogoMobile color="black" />
          </AniLink>
        </div>
        <div className="header__address">
          <span>Тула проспект Ленина 85 корпус 1 вход 5</span>
          <a href="tel:+74872770247">+7 4872 77 02 47</a>
        </div>
        <div className="header__links">
          <AniLink fade to="/food">
            Блюда
          </AniLink>
          <AniLink fade to="/drinks">
            Напитки
          </AniLink>
        </div>
        <div
          className={classnames('header__button', {
            'header__button--changed': navIsOpened,
          })}
          onClick={handleNav}
        >
          <span className="line-one"></span>
          <span className="line-two"></span>
          <span className="line-three"></span>
        </div>
      </div>
    </div>
  )
}

export default Header

{
  /*  */
}
