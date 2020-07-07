import React, { useRef } from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import { Fade } from 'react-slideshow-image'
import './AboutSection.scss'
import Img from 'gatsby-image'

function AboutSection({ images }) {
  let aboutText = useRef(null)

  const fadeProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
  }

  const intersection = useIntersection(aboutText, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  })

  return (
    <section id="about">
      <div className="about__gallery">
        <Fade {...fadeProperties}>
          {images.map(image => (
            <div className="image-container" key={image.src}>
              <Img fluid={image} />
            </div>
          ))}
        </Fade>
      </div>
      <div className="about__text" ref={aboutText}>
        <h2 className="about__text--title">О нас</h2>
        <div className="about__text--body">
          <p>
            Авторская кухня. Специализируемся на блюдах, приготовленных на
            гриле. Используем печь{' '}
            <a
              href="https://www.josper.es/ru/josper/about/"
              target="_blank"
              rel="noopener noreferrer"
              title="О печах Josper"
            >
              Josper.
            </a>
          </p>
          <p>
            Классические и фирменные коктейли. <br />
            Хороший выбор вина в правильных бокалах.
          </p>
          <p>
            Вы найдете нас на территории торгово-делового квартала&nbsp;
            <a
              className="index__link"
              href="http://likerka-loft.ru/"
              target="_blank"
              rel="noopener noreferrer"
              title="Сайт likerka-loft.ru"
            >
              &laquo;Ликерка Лофт&raquo;
            </a>{' '}
            по адресу: проспект Ленина, дом 85, корпус 5, вход 1.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
