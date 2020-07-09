import React from 'react'
import './AboutSection.scss'

function AboutSection({ img }) {
  return (
    <section id="about" className="data-scroll-section">
      <div className="about__wrapper">
        <div className="about__image-container">
          <div
            className="about__image"
            style={{ backgroundImage: `url(${img.src})` }}
          ></div>
        </div>
        <div className="about__content">
          <h2 className="about__title">О нас</h2>
          <div className="about__text">
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
      </div>
    </section>
  )
}

export default AboutSection
