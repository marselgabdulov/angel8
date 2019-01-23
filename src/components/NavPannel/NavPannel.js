import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './NavPannel.css'

const NavPannel = props => {
  let pannelClass = 'nav-closed'
  if (props.show === true) {
    pannelClass = 'nav-opened'
  }

  return (
    <>
      <div className={pannelClass}>
        <div className="nav-wrapper">
          <div className="nav-wrapper__links">
            <a
              className="nav-wrapper__link"
              href="tel:+74872770247"
              title="Позвоните нам"
            >
              +7 (4872) 77-02-47
            </a>
            <AniLink
              title="Меню | Блюда"
              className="nav-wrapper__link"
              cover
              to="/food"
              bg="#232324"
              activeStyle={{
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Блюда
            </AniLink>
            <AniLink
              title="Меню | Напитки"
              className="nav-wrapper__link"
              to="/drinks"
              cover
              bg="#232324"
              activeStyle={{
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Напитки
            </AniLink>
            <AniLink
              title="Контакты"
              className="nav-wrapper__link"
              to="/contacts"
              cover
              bg="#232324"
              activeStyle={{
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Контакты
            </AniLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavPannel
