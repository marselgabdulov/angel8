import React from 'react'
// data files
import LogoDesk from '../../components/LogoDesk'
import menuPDF from '../../docs/angel8_menu.pdf'

//Styles
import './IntroSection.scss'

function IntroSection({ introImage }) {
  return (
    <section id="intro">
      <div
        className="intro__image"
        style={{ backgroundImage: `url(${introImage.src})` }}
      ></div>
      <div className="intro__logo">
        <LogoDesk />
      </div>
      <div className="intro__info">
        <h1 className="intro__title">Cocktails / Grill / Wine</h1>
        <h4 className="intro__subtitle">Контакты</h4>
        <div className="intro__contacts">
          <span>Тула проспект Ленина 85</span>
          <span>корпус 1 вход 5</span>
          <a href="tel:+74872770247">+7 4872 77 02 47</a>
        </div>
        <h4 className="intro__subtitle">Ждем Вас</h4>
        <span>Воскресенье - Четверг 12:00 - 24:00</span>
        <span>Пятница и Суббота 12:00 - 02:00</span>
        <a href={menuPDF} target="_blank" rel="noopener noreferrer">
          Меню PDF
        </a>
        <div className="intro__social-mobile">
          <h4 className="intro__subtitle">Соцсети</h4>
          <a
            href="https://www.instagram.com/angel_bar_grill/?hl=ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          {/* <a
            href="https://www.facebook.com/Angel-8-2123834887946466/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a> */}
        </div>
      </div>
    </section>
  )
}

export default IntroSection
