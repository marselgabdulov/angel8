import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './About.css'

const About = props => (
  <section className="about">
    <div
      className="about__image"
      style={{
        backgroundImage: `url(${props.bgImage})`,
      }}
    />
    <div
      className="about__text"
      data-aos="fade"
      data-aos-delay="100"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      <h2>О нас</h2>
      <p>
        Мы находимся на территории торгово-делового квартала&nbsp;
        <a
          className="index__link"
          href="https://vk.com/likerkaloft"
          target="_blank"
          rel="noopener noreferrer"
        >
          &laquo;Ликерка Лофт&raquo;
        </a>
        .
      </p>
      <p>Готовим блюда паназиатской кухни и блюда на гриле.</p>
      <p>
        У нас Вы сможете насладиться нашими коктейлями и традиционными
        напитками.
      </p>
      <AniLink to="/food">Кухня</AniLink> <br />
      <AniLink to="/drinks">Бар</AniLink>
    </div>
  </section>
)

export default About
