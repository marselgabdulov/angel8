import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Header.scss'
import Logo from '../Logo'

function Header({ handleMenu }) {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <AniLink cover to="/" bg="#181818" title="На главную">
            <Logo color="white" />
          </AniLink>
        </div>
        <div className="header__button" onClick={handleMenu}>
          <div className="header__button--bg">
            <span className="line-one"></span>
            <span className="line-two"></span>
            <span className="line-three"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
