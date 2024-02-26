import React from 'react'
// import './Footer.scss'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__copyright">
          2019- {new Date().getFullYear()} © Angel 8
        </div>
        <div className="footer__author">
          разработка{' '}
          <a
            href="https://github.com/marselgabdulov"
            target="_blank"
            rel="noreferrer"
          >
            mars.dev.
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
