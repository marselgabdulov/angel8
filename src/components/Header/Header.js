import React, { useContext } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Header.css'
import LogoMobile from './LogoMobile'
import NavContext from '../../context/nav/navContext'
import classnames from 'classnames'
import menuPDF from '../../docs/angel8_menu.pdf'

function Header() {
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
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <AniLink fade to="/" title="На главную">
            <LogoMobile color="black" />
          </AniLink>
        </div>
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
    </header>
  )
}

export default Header

{
  /*  */
}
