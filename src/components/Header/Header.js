import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import './Header.css'
import LogoMobile from './LogoMobile'
import menuPDF from '../../docs/angel8_menu.pdf'

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/" title="На главную">
            <div className="link_name"></div>
            <LogoMobile color="black" />
          </Link>
        </div>
        <div className="header__links">
          <Link to="/food">Блюда</Link>
          <Link to="/drinks">Напитки</Link>
          <a href={menuPDF} target="_blank" rel="noopener noreferrer">
            Меню pdf
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
