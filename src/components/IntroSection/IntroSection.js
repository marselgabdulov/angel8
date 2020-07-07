import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

// data files
import VideoMP4 from '../../video/angel8bg2.mp4'
import VideoWEBM from '../../video/angel8bg2.webm'
import menuPDF from '../../docs/angel8_menu.pdf'
//Styles
import './IntroSection.scss'

function IntroSection() {
  let introBg = useRef(null)
  let introVideo = useRef(null)
  let introTitle = useRef(null)
  let introDescription = useRef(null)
  let introFooter = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.fromTo(
      '.intro__video-container',
      {
        css: {
          opacity: '0',
        },
      },
      {
        css: {
          opacity: '1',
        },
        delay: 0,
        duration: 1,
        ease: 'power1.in',
      }
    ).fromTo(
      ['.intro__title', '.intro__description', '.intro__footer'],
      {
        css: {
          opacity: '0',
        },
      },
      {
        css: {
          opacity: '1',
        },
        delay: 0,
        duration: 0.45,
        stagger: 0.25,
        ease: 'power1.in',
      }
    )
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
        <div className="intro__title-container">
          <div className="intro__line-one">
            <h1 className="intro__title" ref={el => (introTitle = el)}>
              Эмоциональная кухня
            </h1>
          </div>
          <div className="intro__line-two">
            <p
              className="intro__description"
              ref={el => (introDescription = el)}
            >
              ресторан. гриль. бар.
            </p>
          </div>
        </div>
        <div className="intro__footer" ref={el => (introFooter = el)}>
          <div className="intro__address">
            <span>Тула проспект Ленина 85</span>
            <br />
            <span>корпус 1 вход 5</span>
            <br />
            <a href="tel:+74872770247" itemProp="telephone">
              +7 (4872) 77-02-47
            </a>
          </div>
          <div className="intro__menu-download" ref={el => (introFooter = el)}>
            <a href={menuPDF} download>
              Скачать меню PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
