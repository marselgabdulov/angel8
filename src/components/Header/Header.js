import React, { useContext, useState, useEffect, useRef } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Header.scss'
import LogoMobile from './LogoMobile'
import NavContext from '../../context/nav/navContext'
import classnames from 'classnames'
import { window } from 'browser-monads'
import menuPDF from '../../docs/angel8_menu.pdf'

function Header() {
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
        <div className="header__address"></div>
        <div className="header__links">
          <AniLink fade to="/food">
            Блюда
          </AniLink>
          <AniLink fade to="/drinks">
            Напитки
          </AniLink>
          <a href={menuPDF} target="_blank" rel="noopener noreferrer">
            Меню pdf
          </a>
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
