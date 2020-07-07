import React, { useEffect, useRef } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Header.scss'
import Logo from '../Logo'
import gsap from 'gsap'

function Header({ handleMenu }) {
  let headerRef = useRef(null)
  let tl = gsap.timeline()

  useEffect(() => {
    tl.fromTo(
      '.header',
      {
        css: {
          opacity: 0,
        },
      },
      {
        css: {
          opacity: 1,
        },
        delay: 0,
        duration: 1,
        ease: 'power1.in',
      }
    )
  }, [headerRef])
  return (
    <div className="header" ref={el => (headerRef = el)}>
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
