import React, { useContext } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Header.scss'
import Logo from '../Logo'
import gsap from 'gsap'
import NavContext from '../../context/nav/navContext'

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
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <AniLink fade to="/" title="На главную">
            <Logo color="white" />
          </AniLink>
        </div>
        <div className="header__button" onClick={handleNav}>
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
