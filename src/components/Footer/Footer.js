import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import footerLogo from '../../images/logo-white-full.png'
import './Footer.css'

const Footer = () => (
  <div className="footer">
    <div className="footer__wrapper">
      <div className="footer__address">
        <span>Тула</span>
        <span>пр-т Ленина 85, кор. 1, вход 5</span>
      </div>
      <div className="footer__contacts">
        <span>8 (4872) 77-02-47</span>
        <span>angel8@gmail.com</span>
      </div>
      <div className="footer__maps">
        <span>
          <a
            href="https://yandex.ru/maps/15/tula/?ll=37.600468%2C54.175741&mode=search&sll=37.600073%2C54.176105&sspn=0.002913%2C0.001007&text=%D0%BF%D1%80.%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%2C%2085%2F1%2C%20%D0%A2%D1%83%D0%BB%D0%B0%2C%20%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.%2C%20300041&z=16.6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс Карты
          </a>
        </span>
        <span>
          <a
            href="https://www.google.ru/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+85%2F1,+%D0%A2%D1%83%D0%BB%D0%B0,+%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+300012/@54.1754978,37.5985736,18.75z/data=!4m5!3m4!1s0x41343ff33ff3f2dd:0x50f6950475b6b04d!8m2!3d54.1754618!4d37.5993346?hl=ru&authuser=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </span>
      </div>
      <div className="footer__logo">
        <AniLink to="/" cover bg="#663399">
          <img className="footer__logo" src={footerLogo} alt="footer-logo" />
        </AniLink>
      </div>
      <div className="footer__working-time">
        <span>пн-чт/12:00-24:00/</span>
        <span>пт-сб/12:00-02:00/</span>
        <span>вс/12:00-24:00/</span>
      </div>
      <div className="footer__social">
        <span>
          <a
            href="https://www.facebook.com/Angel-8-2123834887946466/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/angel_bar_grill/?hl=ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </span>
      </div>
      <div className="footer__author">
        Разработано &nbsp;
        <a
          href="https://marselgabdulov.github.io/personal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MG
        </a>
      </div>
      <div className="footer__copy">Copyright &copy; 2019 Angel8</div>
    </div>
  </div>
)

export default Footer
