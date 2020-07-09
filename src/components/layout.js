import React, { useState, useEffect, useRef } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
// import Grid from './Grid/Grid'
import gsap from 'gsap'
import './layout.scss'
import { window } from 'browser-monads'
import NavState from '../context/nav/NavState'

function Layout(props) {
  let layoutRef = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.to('.layout', {
      css: {
        opacity: 1,
      },
      delay: 0,
      duration: 0.15,
      ease: 'power1.in',
    })
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

        <Footer />
        {/* <Grid /> */}
      </div>
    </NavState>
  )
}

export default Layout
