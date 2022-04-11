import React from 'react'
import './About.css'

function AboutSection({ img }) {
  return (
    <section id="about" className="data-scroll-section about">
      {/* <div className="about__image-container">
          <Img fluid={img} className="about__image"></Img>
        </div> */}
      <div className="about__text">
        <h2 className="about__title">О нас</h2>
        <div className="about__text">
          <p>
            Полумрак, свечи, винтажная мебель. Приятный вкус до и после.
            Смешиваем тихие и яркие вкусы. Подаем вина в хрустале. Летом пальмы
            и столы во дворе. Готовим блюда в печи&nbsp;
            <a
              href="https://www.josper.es/ru/josper/about/"
              target="_blank"
              rel="noopener noreferrer"
              title="О печах Josper"
            >
              Josper
            </a>
            . Нас трудно найти на территории&nbsp;
            <a
              className="index__link"
              href="http://likerka-loft.ru/"
              target="_blank"
              rel="noopener noreferrer"
              title="Сайт likerka-loft.ru"
            >
              &laquo;Ликерка Лофт&raquo;
            </a>
            . Звоните и мы Вас встретим и проводим.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
