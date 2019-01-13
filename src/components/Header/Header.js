import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from '../../images/header-logo.png'
import './Header.css'

const Header = () => (
  <div className="header">
    <div className="header__wrapper">
      <div className="header__logo">
        <AniLink to="/">
          <img className="header__logo-img" src={logo} alt="logo" />
        </AniLink>
      </div>
      <div className="header__links">
        <div className="header__link">
          <AniLink
            to="/food"
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'underline',
            }}
          >
            Блюда
          </AniLink>
        </div>
        <div className="header__link">
          <AniLink
            to="/drinks"
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'underline',
            }}
          >
            Напитки
          </AniLink>
        </div>
        <div className="header__link">
          <AniLink
            to="/contacts"
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'underline',
            }}
          >
            Контакты
          </AniLink>
        </div>
      </div>
    </div>
  </div>
)

export default Header
