import React from 'react'
import './ArrowToSection.scss'
import Arrow from '../../assets/arrow.svg'

function ArrowToSection({ handleClick }) {
  return (
    <button className="arrow-to-section" onClick={handleClick}>
      <Arrow />
    </button>
  )
}

export default ArrowToSection
