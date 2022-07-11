import React from 'react'
import './MenuItem.scss'

function MenuItem({ name, description, price }) {
  return (
    <div className="menu-item">
      <div className="menu-item__name">{name}</div>
      {description && (
        <div className="menu-item__description">&nbsp;({description})</div>
      )}
      <span />
      <div className="menu-item__price">{price}</div>
    </div>
  )
}

export default MenuItem
