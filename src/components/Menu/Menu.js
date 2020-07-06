import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './Menu.scss'

function Menu(props) {
  return (
    <>
      <div className={props.show ? 'menu-opened' : 'menu-closed'}>
        <div className="menu__wrapper">
          <AniLink
            title="Меню | Блюда"
            className="menu__link"
            cover
            to="/food"
            bg="#232324"
            activeStyle={{
              textDecoration: 'underline',
            }}
          >
            Блюда
          </AniLink>
          <AniLink
            title="Меню | Напитки"
            className="menu__link"
            to="/drinks"
            cover
            bg="#232324"
            activeStyle={{
              textDecoration: 'underline',
            }}
          >
            Напитки
          </AniLink>

          <div className="menu__address">
            <span>Тула проспект Ленина 85 корпус 1 вход 5</span>
            <a href="tel:+74872770247" title="Позвоните нам">
              +7 4872 77 02 47
            </a>
          </div>

          <div className="menu__working-time">
            <span>воскресенье - четверг: 12:00 - 24:00</span>
            <span>пятница - суббота: 12:00 - 02:00</span>
          </div>
          <div className="menu__social">
            <span>
              <a
                href="https://www.facebook.com/Angel-8-2123834887946466/"
                target="_blank"
                rel="noopener noreferrer"
                title="Мы в Facebook"
              >
                Facebook
              </a>
            </span>{' '}
            <span>
              <a
                href="https://www.instagram.com/angel_bar_grill/?hl=ru"
                target="_blank"
                rel="noopener noreferrer"
                title="Наш Instagram"
              >
                Instagram
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
