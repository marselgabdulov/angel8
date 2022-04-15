import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Header.css'
import LogoMobile from './LogoMobile'
import menuPDF from '../../docs/angel8_menu.pdf'

function Header() {
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
      </div>
    </header>
  )
}

export default Header
