import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './NavPannel.css'
import navLogo from '../../images/footer-logo.png'

const NavPannel = props => {
  let pannelClass = 'nav-closed'
  if (props.show === true) {
    pannelClass = 'nav-opened'
  }

  return (
    <>
      <div className={pannelClass}>
        <div className="nav-wrapper">
          <AniLink
            to="/"
            onClick={props.handleClick}
            className="nav-wrapper__logo"
            cover
            bg="#663399"
          >
            <img className="footer__logo" src={navLogo} alt="Angel 8" />
          </AniLink>

          <div className="nav-wrapper__links">
            <AniLink
              onClick={props.handleClick}
              className="nav-wrapper__link"
              to="/food"
            >
              Блюда
            </AniLink>
            <AniLink
              onClick={props.handleClick}
              className="nav-wrapper__link"
              to="/drinks"
            >
              Напитки
            </AniLink>
            <AniLink
              onClick={props.handleClick}
              className="nav-wrapper__link"
              to="/contacts"
            >
              Контакты
            </AniLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavPannel
