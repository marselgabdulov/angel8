import React from 'react'
import './About.css'

function AboutSection({ img }) {
  return (
    <section id="about" className="data-scroll-section about">
      <div className="text">
        <h2 className="text__title">О нас</h2>
        <div className="about__body">
          <p>
            Готовим блюда в печи&nbsp;
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
          <h3>Оплата по QR-коду</h3>
          <div className="qr__image-container">
            <div
              className="qr__image"
              style={{ backgroundImage: `url(${img.src})` }}
            ></div>
          </div>
          <p>Отсканируйте и оплатите в приложении банка</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
