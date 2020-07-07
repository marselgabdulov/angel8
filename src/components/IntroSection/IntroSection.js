import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

// data files
import VideoMP4 from '../../video/angel8bg2.mp4'
import VideoWEBM from '../../video/angel8bg2.webm'
import menuPDF from '../../docs/angel8_menu.pdf'
//Styles
import './IntroSection.scss'

function IntroSection() {
  let videoBackground = useRef(null)
  let introTitle = useRef(null)
  let introFooter = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.to('.intro__bg', 0.25, {
      css: {
        opacity: 1,
      },
      delay: 0.25,
      ease: 'power4.inOut',
    }).to(['.intro__title', '.intro__footer'], 0.25, {
      css: {
        opacity: 1,
      },
      delay: 0.25,
      ease: 'power4.inOut',
    })
  }, [videoBackground, introTitle, introFooter])

  return (
    <section id="intro">
      <div className="intro__bg" ref={el => (videoBackground = el)}>
        <video loop autoPlay muted>
          <source type="video/webm" src={VideoWEBM} />
          <source type="video/mp4" src={VideoMP4} />
        </video>
        <div className="intro__title">
          <h1 ref={el => (introTitle = el)}>Эмоциональная кухня</h1>
          <span>ресторан. гриль. бар.</span>
        </div>
        <div className="intro__footer" ref={el => (introFooter = el)}>
          <div className="intro__address">
            <span>Тула проспект Ленина 85</span>
            <br />
            <span>корпус 1, вход 5</span>
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
