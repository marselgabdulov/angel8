import React from 'react'
import './ComplexMenuPosition.css'

const ComplexMenuPosition = props => (
  <div className="complex-menu-position">
    <div className="complex-menu-position__name">{props.name} </div>
    <div className="complex-menu-position__description">
      &nbsp;({props.description})
    </div>

    <span />
    <div className="complex-menu-position__price">{props.price} &#8381;</div>
  </div>
)

export default ComplexMenuPosition
