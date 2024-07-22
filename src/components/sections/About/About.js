import React from 'react'
import './About.css'

function AboutSection({ img }) {
  return (
    <section id="about" className="data-scroll-section about">
      {/* <div className="about__image-container">
          <Img fluid={img} className="about__image"></Img>
        </div> */}
      <div className="text">
        <h2 className="text__title">О нас</h2>
        <div className="about__body">
          <p>
            Приятный вкус до и после. Смешиваем тихие и яркие ноты. Готовим
            блюда в печи&nbsp;
            <a
              href="https://www.josper.es/ru/josper/about/"
              target="_blank"
              rel="noopener noreferrer"
              title="О печах Josper"
            >
              Josper
            </a>
            . Доставляем бесплатно.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
