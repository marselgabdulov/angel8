import React from 'react'
import './MenuSection.scss'
import MenuItem from '../MenuItem/MenuItem'

function MenuSection({ id, title, data }) {
  return (
    <div id={id} className="menu-section">
      <span className="menu-section__title">{title}</span>
      {data.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default MenuSection
