import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'
import Grid from './Grid/Grid'
import { openMenu, closeMenu } from '../animations/navigation'
import './layout.scss'
import { window } from 'browser-monads'

function Layout(props) {
  const [menu, setMenu] = useState({ opened: false })
  const [width, setWidth] = useState(null)

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    setWidth(document.documentElement.clientWidth)
  })

  function handleMenu() {
    setMenu({ opened: !menu.opened })
    if (menu.opened) {
      closeMenu(width)
    } else {
      openMenu(width)
    }
  }

  return (
    <>
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
      <Grid />
    </>
  )
}

export default Layout
