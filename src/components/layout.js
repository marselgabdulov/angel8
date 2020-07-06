import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Header from './Header/Header'
import NavPannel from './NavPannel/NavPannel'
import Grid from './Grid/Grid'
import { openMenu, closeMenu } from '../animations/navigation'
import './layout.scss'

function Layout(props) {
  const [menu, setMenu] = useState({ opened: false })
  const [width, setWidth] = useState(null)

  useEffect(() => {
    AOS.init()

    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    setWidth(document.documentElement.clientWidth)

    var docWidth = document.documentElement.offsetWidth

    ;[].forEach.call(document.querySelectorAll('*'), function(el) {
      if (el.offsetWidth > docWidth) {
        console.log(el)
      }
    })
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
      <NavPannel show={menu.opened} handleClick={handleMenu} />
      {/* <NavButton clickHandler={handleClick} icon={navPannel} /> */}
      <Header handleMenu={handleMenu} />
      <main>{props.children}</main>
      <Grid />
    </>
  )
}

export default Layout
