import React, { useState, useEffect, useRef } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'
import Grid from './Grid/Grid'
import gsap from 'gsap'
import { openMenu, closeMenu } from '../animations/navigation'
import './layout.scss'
import { window } from 'browser-monads'

function Layout(props) {
  const [menu, setMenu] = useState({ opened: false })
  const [width, setWidth] = useState(null)
  let layoutRef = useRef(null)

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    setWidth(document.documentElement.clientWidth)
    let tl = gsap.timeline()
    tl.to('.layout', {
      css: {
        opacity: 1,
      },
      delay: 0,
      duration: 0.25,
      ease: 'power1.in',
    })
  }, [layoutRef])

  function handleMenu() {
    setMenu({ opened: !menu.opened })
    if (menu.opened) {
      closeMenu(width)
    } else {
      openMenu(width)
    }
  }

  return (
    <div className="layout" ref={el => (layoutRef = el)}>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Menu show={menu.opened} handleClick={handleMenu} />
      <Header handleMenu={handleMenu} />
      <main
        className="main"
        onClick={() => (menu.opened ? handleMenu() : null)}
      >
        {props.children}
      </main>
      <Footer />
      {/* <Grid /> */}
    </div>
  )
}

export default Layout
