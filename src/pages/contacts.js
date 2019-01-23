import React from 'react'
import Layout from '../components/layout'
import './contactsPage.css'

const ContactsPage = props => (
  <Layout>
    <div className="contacts-page">
      <div
        className="contacts-page__title"
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <h1>Контакты</h1>
      </div>
      <div
        className="contacts-page__info"
        data-aos="fade"
        data-aos-delay="150"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div className="contacts-page__address">
          <span>г. Тула</span>
          <br />
          <span>пр-т Ленина 85, кор. 1, вход 5</span>
          <br />
          <a
            className="index__link"
            href="http://likerka-loft.ru/"
            target="_blank"
            rel="noopener noreferrer"
            title="Сайт likerka-loft.ru"
          >
            &laquo;Ликерка Лофт&raquo;
          </a>
          <br />
          <span>300041</span>
        </div>
        <div className="contacts-page__phone">
          <span>
            <a href="tel:+74872770247" title="Позвоните нам">
              +7 (4872) 77-02-47
            </a>
          </span>
          <br />
          <a href="mailto:angel8bar@gmail.com" title="Напишите нам">
            angel8bar@gmail.com
          </a>
          <span />
        </div>

        <div className="contacts-page__maps">
          <span>
            <a
              href="https://yandex.ru/maps/15/tula/?ll=37.600468%2C54.175741&mode=search&sll=37.600073%2C54.176105&sspn=0.002913%2C0.001007&text=%D0%BF%D1%80.%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%2C%2085%2F1%2C%20%D0%A2%D1%83%D0%BB%D0%B0%2C%20%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.%2C%20300041&z=16.6"
              target="_blank"
              rel="noopener noreferrer"
              title="Мы на Яндекс картах"
            >
              Яндекс Карты
            </a>
          </span>
          <br />
          <span>
            <a
              href="https://www.google.ru/maps/place/%D0%BF%D1%80.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+85%2F1,+%D0%A2%D1%83%D0%BB%D0%B0,+%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+300012/@54.1754978,37.5985736,18.75z/data=!4m5!3m4!1s0x41343ff33ff3f2dd:0x50f6950475b6b04d!8m2!3d54.1754618!4d37.5993346?hl=ru&authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              title="Мы на Google картах"
            >
              Google Maps
            </a>
          </span>
          <br />
          <span>
            <a
              href="https://2gis.ru/tula/query/%D1%82%D1%83%D0%BB%D0%B0%2C%20%D0%BB%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%2085%20%D0%BA1/geo/5067185236026722?queryState=center%2F37.599345%2C54.176138%2Fzoom%2F16"
              target="_blank"
              rel="noopener noreferrer"
              title="Мы на 2gis картах"
            >
              2gis
            </a>
          </span>
        </div>
        <div className="contacts-page__working-time">
          <span> пн-чт / 12:00-24:00 /</span>
          <br />
          <span> пт-сб / 12:00-02:00 /</span>
          <br />
          <span>вс / 12:00-24:00 /</span>
        </div>

        <div className="contacts-page__social">
          <a
            href="https://www.facebook.com/Angel-8-2123834887946466/"
            target="_blank"
            rel="noopener noreferrer"
            title="Мы в Facebook"
          >
            Facebook
          </a>
          <br />
          <a
            href="https://www.instagram.com/angel_bar_grill/?hl=ru"
            target="_blank"
            rel="noopener noreferrer"
            title="Наш Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactsPage
