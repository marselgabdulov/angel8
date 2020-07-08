import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import TransitionLink from 'gatsby-plugin-transition-link'
// data files
import VideoMP4 from '../../video/angel8bg2.mp4'
import VideoWEBM from '../../video/angel8bg2.webm'
import menuPDF from '../../docs/angel8_menu.pdf'
//Styles
import './IntroSection.scss'
import InstagramLogo from '../../assets/instagram-logo.svg'
import FacebookLogo from '../../assets/facebookAlt.svg'

function IntroSection() {
  let introBg = useRef(null)
  let introVideo = useRef(null)
  let introTitle = useRef(null)
  let introDescription = useRef(null)
  let introFooter = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.to('.intro__bg', {
      css: {
        opacity: '1',
      },
      delay: 0,
      duration: 1,
      ease: 'power1.in',
    }).to(['.intro__title', '.intro__description', '.intro__footer'], {
      css: {
        opacity: '1',
      },
      delay: 0,
      duration: 0.45,
      stagger: 0.25,
      ease: 'power1.in',
    })
  }, [introBg, introVideo, introTitle, introDescription, introFooter])

  return (
    <section id="intro">
      <div className="intro__bg" ref={el => (introBg = el)}>
        <div className="intro__video-container" ref={el => (introVideo = el)}>
          <video loop autoPlay muted className="intro__video">
            <source type="video/webm" src={VideoWEBM} />
            <source type="video/mp4" src={VideoMP4} />
          </video>
        </div>
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
        <div className="intro__footer" ref={el => (introFooter = el)}>
          <div className="intro__footer-wrapper">
            <div className="intro__address">
              <span className="intro__subtitle">Адрес</span>
              <span>Тула проспект Ленина 85 корпус 1 вход 5</span>
              <a href="tel:+74872770247" itemProp="telephone">
                +7 (4872) 77-02-47
              </a>
            </div>
            <div className="intro__working-time">
              <span className="intro__subtitle">Мы открыты</span>
              <span>воскресенье - четверг 12:00 - 24:00</span>
              <span>пятница и суббота 12:00 - 02:00</span>
            </div>
            <div className="intro__menu" ref={el => (introFooter = el)}>
              <span className="intro__subtitle">Меню</span>
              <TransitionLink
                to="/food"
                activeStyle={{ color: '#f34444' }}
                exit={{
                  length: 0.5,
                }}
                entry={{
                  delay: 0.25,
                }}
              >
                Блюда
              </TransitionLink>
              <TransitionLink
                to="/drinks"
                activeStyle={{ color: '#f34444' }}
                exit={{
                  length: 0.5,
                }}
                entry={{
                  delay: 0.25,
                }}
              >
                Напитки
              </TransitionLink>
              <a href={menuPDF} download>
                Меню PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
