import React, { useEffect, useRef } from 'react'
import Header from './Header/Header'
import './layout.scss'
import { window } from 'browser-monads'

function Layout(props) {
  let layoutRef = useRef(null)

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}`)
  }, [layoutRef])

  return (
    <div className="layout" ref={el => (layoutRef = el)}>
      <Header />
      <main className="main">{props.children}</main>
    </div>
  )
}

export default Layout
