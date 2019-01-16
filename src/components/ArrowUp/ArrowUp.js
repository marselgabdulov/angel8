import React from 'react'
import ScrollToTop from 'react-scroll-up'
import './ArrowUp.css'

const ArrowUp = () => (
  <ScrollToTop showUnder={260}>
    <svg className="arrow-up">
      <path className="a1" d="M0 0 L15 16 L30 0" />
      <path className="a2" d="M0 10 L15 26 L30 10" />
      <path className="a3" d="M0 20 L15 36 L30 20" />
    </svg>
  </ScrollToTop>
)

export default ArrowUp
