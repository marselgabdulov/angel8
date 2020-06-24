import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Header from './Header/Header'
import NavPannel from './NavPannel/NavPannel'
import NavButton from './NavButton/NavButton'
import ArrowUp from './ArrowUp/ArrowUp'
import Grid from './Grid/Grid'

import './layout.scss'

function Layout(props) {
  const [navPannel, setNavPannel] = useState(false)
  useEffect(() => {
    AOS.init()
  })

  function handleClick() {
    navPannel ? setNavPannel(false) : setNavPannel(true)
  }

  return (
    <>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <ArrowUp />
      <NavPannel show={navPannel} handleClick={handleClick} />
      <NavButton clickHandler={handleClick} icon={navPannel} />
      <Header />
      <main>{props.children}</main>
      <Grid />
    </>
  )
}

export default Layout
