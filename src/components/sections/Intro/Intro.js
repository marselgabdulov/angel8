import React from 'react'
import LogoDesk from '../../LogoDesk'
import './Intro.css'

function IntroSection({ introImage }) {
  return (
    <section id="intro" className="intro">
      <div className="intro__text">
        <div className="intro__logo">
          <LogoDesk />
        </div>
        <span>Тула пр. Ленина 85 корпус 1 вход 5</span>
        <span>Ежедневно с 12:00 до 21:00</span>
        <span> в формате DARK kitchen / Доставка & Самовывоз</span>
        <a href="tel:+74872770247">+7 4872 77 02 47</a>
        <a
          href="https://www.instagram.com/angel_bar_grill/?hl=ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="mailto:info@angel8bar.ru">info@angel8bar.ru</a>
      </div>

      <div className="image-container">
        <div
          className="intro__image"
          style={{ backgroundImage: `url(${introImage.src})` }}
        ></div>
      </div>
    </section>
  )
}

export default IntroSection
