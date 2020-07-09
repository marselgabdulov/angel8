import React, { useRef, useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'
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
  let introVideo = useRef(null)
  let introTitle = useRef(null)
  let introDescription = useRef(null)
  let introFooter = useRef(null)

  // const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })

  // useEffect(() => {
  //   if (inView) {
  //     let tl = gsap.timeline()
  //     tl.to('#path22', {
  //       css: {
  //         fill: 'white',
  //       },
  //       delay: 0,
  //       duration: 0.25,
  //       ease: 'power1.in',
  //     })
  //   }
  // }, [inView])

  useEffect(() => {
    let tl = gsap.timeline()
    tl.to('.intro__video', {
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
  }, [introVideo, introTitle, introDescription, introFooter])

  return (
    <section id="intro">
      <div className="intro__slogan">
        <h1 className="intro__title">Эмоциональная кухня</h1>
        <h4 className="intro__description">Ресторан. Гриль. Бар.</h4>
      </div>
      <div className="intro__working-time">
        <p>Воскресенье - Четверг 12:00 - 24:00</p>
        <p>Пятница и Суббота 12:00 - 02:00</p>
      </div>
      <video
        loop
        autoPlay
        muted
        className="intro__video"
        ref={el => (introVideo = el)}
      >
        <source type="video/webm" src={VideoWEBM} />
        <source type="video/mp4" src={VideoMP4} />
      </video>

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
