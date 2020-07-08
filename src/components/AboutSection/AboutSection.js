import React from 'react'
import './AboutSection.scss'

function AboutSection({ image }) {
  return (
    <section id="about">
      <div className="about__wrapper">
        <div className="about__image-container">
          <div
            className="about__image"
            data-aos="zoom-out"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top"
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        </div>
        <div className="about__content">
          <h2
            className="about__title"
            data-aos="fade"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            О нас
          </h2>
          <div className="about__text">
            <p
              data-aos="fade"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
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
            <p
              data-aos="fade"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              Классические и фирменные коктейли. <br />
              Хороший выбор вина в правильных бокалах.
            </p>
            <p
              data-aos="fade"
              data-aos-delay="350"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
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
