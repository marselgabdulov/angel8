import React, { useState, useEffect, useRef } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import Grid from './Grid/Grid'
import gsap from 'gsap'
import AOS from 'aos'
import './layout.scss'
import { window } from 'browser-monads'
import NavState from '../context/nav/NavState'

function Layout(props) {
  const [width, setWidth] = useState(null)
  let layoutRef = useRef(null)

  useEffect(() => {
    AOS.init()
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
