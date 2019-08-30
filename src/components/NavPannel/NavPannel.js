import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './NavPannel.scss'

function NavPannel(props) {
  return (
    <>
      <div className={props.show ? 'nav-opened' : 'nav-closed'}>
        <AniLink
          title="Меню | Блюда"
          className="nav__link"
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
          className="nav__link"
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
          className="nav__link"
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
        <a className="nav__link" href="tel:+74872770247" title="Позвоните нам">
          +7 (4872) 77-02-47
        </a>
      </div>
    </>
  )
}

export default NavPannel
