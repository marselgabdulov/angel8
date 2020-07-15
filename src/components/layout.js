import React, { useEffect, useRef } from 'react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import './layout.scss'
import { window } from 'browser-monads'
import NavState from '../context/nav/NavState'

function Layout(props) {
  let layoutRef = useRef(null)

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}`)
  }, [layoutRef])

  return (
    <NavState>
      <div className="layout" ref={el => (layoutRef = el)}>
        <div className="turn">
          <span>Пожалуйста переверните</span>
        </div>
        <Nav />
        <Header />
        <main className="main">{props.children}</main>
      </div>
    </NavState>
  )
}

export default Layout
