import React from 'react'
import './Submenu.scss'

function Submenu({ linksData }) {
  function scrollTo(el) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: el.offsetTop - 100,
    })
  }

  return (
    <div className="submenu">
      <h3 className="submenu__title">быстрый поиск</h3>
      <div className="submenu__links">
        {linksData.map(item => (
          <span
            key={item.id}
            className="submenu__link"
            onClick={() => scrollTo(document.getElementById(item.id))}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Submenu
