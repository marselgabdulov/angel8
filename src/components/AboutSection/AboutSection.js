import React from 'react'
import Img from 'gatsby-image'
import './AboutSection.scss'

function AboutSection({ img }) {
  return (
    <section id="about" className="data-scroll-section">
      <div className="about__wrapper">
        <div className="about__image-container">
          <Img fluid={img} className="about__image"></Img>
        </div>
        <div className="about__content">
          <h2 className="about__title">О нас</h2>
          <div className="about__text">
            <p>Полумрак, свечи, винтажная мебель. Приятный вкус до и после.</p>
            <p>
              Готовим блюда в печи&nbsp;
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
              Смешиваем тихие и яркие вкусы. Подаем вина в хрустале. Летом
              пальмы и столы во дворе.
            </p>
            <p>
              Нас трудно найти на территории&nbsp;
              <a
                className="index__link"
                href="http://likerka-loft.ru/"
                target="_blank"
                rel="noopener noreferrer"
                title="Сайт likerka-loft.ru"
              >
                &laquo;Ликерка Лофт&raquo;
              </a>
              . Звоните и мы вас встретим и проводим.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
