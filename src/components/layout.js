import React, { useEffect, useRef } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import gsap from 'gsap'
import './layout.scss'
import { window } from 'browser-monads'
import NavState from '../context/nav/NavState'

function Layout(props) {
  let layoutRef = useRef(null)

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}`)

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
      </div>
    </NavState>
  )
}

export default Layout
