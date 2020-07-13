import React, { useEffect, useState } from 'react'
import { isSafari } from 'react-device-detect'
// data files
import VideoMP4 from '../../video/angel8bg2.mp4'
import VideoWEBM from '../../video/angel8bg2.webm'
import LogoDesk from '../../components/LogoDesk'
import menuPDF from '../../docs/angel8_menu.pdf'
//Styles
import './IntroSection.scss'
import InstagramLogo from '../../assets/instagram-logo.svg'
import FacebookLogo from '../../assets/facebookAlt.svg'

function IntroImage({ image }) {
  const [isImage, setIsImage] = useState(null)
  useEffect(() => {
    setIsImage(isSafari)
  }, [])

  if (isImage) {
    return (
      <div
        className="intro__image"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    )
  } else {
    return (
      <video loop autoPlay muted className="intro__video">
        <source type="video/webm" src={VideoWEBM} />
        <source type="video/mp4" src={VideoMP4} />
      </video>
    )
  }
}

function IntroSection({ introImage }) {
  return (
    <section id="intro">
      <IntroImage image={introImage} />
      <div className="intro__logo">
        <LogoDesk />
      </div>
      <div className="intro__info">
        <h1 className="intro__title">Ресторан. Гриль. Бар.</h1>
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
          <a
            href="https://www.facebook.com/Angel-8-2123834887946466/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="intro__social-desk">
        <a
          href="https://www.instagram.com/angel_bar_grill/?hl=ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo />
        </a>
        <a
          href="https://www.facebook.com/Angel-8-2123834887946466/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookLogo />
        </a>
      </div>
    </section>
  )
}

export default IntroSection
