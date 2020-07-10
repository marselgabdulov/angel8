import React, { useEffect, useState } from 'react'
import { isMobile, isSafari, isChrome } from 'react-device-detect'
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
    setIsImage(isMobile || isSafari)
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
      <div className="intro__slogan">
        <div className="intro__title">
          <LogoDesk />
        </div>
        <h4 className="intro__description">Ресторан. Гриль. Бар.</h4>
      </div>
      <div className="intro__working-time">
        <p>Воскресенье - Четверг 12:00 - 24:00</p>
        <p>Пятница и Суббота 12:00 - 02:00</p>
      </div>
      <div className="intro__menu-pdf">
        <a href={menuPDF} target="_blank" rel="noopener noreferrer">
          Меню PDF
        </a>
      </div>
      <IntroImage image={introImage} />
      <div className="intro__social">
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
