import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/seo'
import { Fade } from 'react-slideshow-image'
// Components
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer'
import InstagramCard from '../components/InstagramCard/InstagramCard'
//  Styles
import './index.css'
import './indexSectionsStyles/Intro.css'
import './indexSectionsStyles/About.css'
import './indexSectionsStyles/Media.css'

// Images
import galleryImageOne from '../images/intro/bread.jpg'
import galleryImageTwo from '../images/intro/mix.jpg'
import galleryImageThree from '../images/intro/soup.jpg'
import aboutImage from '../images/about/bar.jpg'

import instLogo from '../images/instagram/logo.jpg'
import command from '../images/instagram/command.jpg'
import bottles from '../images/instagram/bottles.jpg'
import juice from '../images/instagram/juice.jpg'
import last from '../images/instagram/last.jpg'
import david from '../images/instagram/david.jpg'
import asianFood from '../images/instagram/asian_food.jpg'
import bread from '../images/instagram/bread.jpg'

class IndexPage extends React.Component {
  render() {
    const fadeProperties = {
      duration: 3500,
      transitionDuration: 1000,
      infinite: true,
      indicators: false,
      arrows: false,
    }

    const instagram = [
      {
        url: 'https://www.instagram.com/angel_bar_grill/?hl=ru',
        img: instLogo,
      },
      {
        url: 'https://www.instagram.com/p/Br-JhtlHC59/',
        img: command,
      },
      {
        url: 'https://www.instagram.com/p/BsPx-oonHGk/',
        img: bottles,
      },
      {
        url: 'https://www.instagram.com/p/BsNY__mntMs/',
        img: juice,
      },
      {
        url: 'https://www.instagram.com/p/BsZ3AsRnAay/',
        img: last,
      },
      {
        url: 'https://www.instagram.com/p/BrOGbVbFugw/',
        img: david,
      },
      {
        url: 'https://www.instagram.com/p/Br4_77CHxnP/',
        img: asianFood,
      },
      {
        url: 'https://www.instagram.com/p/BssD9J4nQQB/',
        img: bread,
      },
    ]
    return (
      <Layout>
        <SEO title="Angel 8 | Эмоциональная кухня и бар в Туле. ✆ +7 4872 77 02 47" />
        <div className="index">
          <section className="intro">
            <div className="intro__background" />
            <div className="intro__text">
              <h1
                className="intro__title"
                data-aos="fade"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span>Эмоциональная</span>
                <br />
                <span>кухня</span>
                <br />
                <span>в Туле</span>
              </h1>
              <span className="intro__address">
                <span>пр-т Ленина д.85 кор. 1</span>
              </span>
            </div>

            <div
              className="intro__gallery"
              data-aos="fade"
              data-aos-delay="150"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="image-gallery">
                <Fade {...fadeProperties}>
                  <div
                    style={{
                      backgroundImage: `url(${galleryImageOne})`,
                    }}
                  />
                  <div
                    style={{
                      backgroundImage: `url(${galleryImageTwo})`,
                    }}
                  />
                  <div
                    style={{
                      backgroundImage: `url(${galleryImageThree})`,
                    }}
                  />
                </Fade>
              </div>
            </div>
          </section>
          <section className="about">
            <div className="about__image--wrapper">
              <div
                className="about__image"
                style={{
                  backgroundImage: `url(${aboutImage})`,
                }}
                data-aos="fade"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="true"
              />
            </div>
            <div
              className="about__text"
              data-aos="fade"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h2 className="about__text--title">
                Атмосфера, созданная с любовью
              </h2>
              <p>
                <b>Angel 8</b> предлагает Вам отведать изысканные блюда
                паназиатской кухни и блюда на гриле. <br /> Подробнее о нашей
                &nbsp;
                <AniLink to="/food" title="Меню | Блюда">
                  Кухне.
                </AniLink>
              </p>
              <p>
                У нас самый широкий выбор как традиционных напитков, так и наших
                фирменных коктейлей. Загляните в наш &nbsp;
                <AniLink to="/drinks" title="Меню | Напитки">
                  Бар.
                </AniLink>
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
                  &laquo;Ликерка Лофт&raquo;.
                </a>
              </p>
              <p>
                <AniLink to="/contacts" title="Контакты">
                  Как добраться.
                </AniLink>
              </p>
            </div>
          </section>
          <>
            <section>
              <h2 className="media__title">Медиа / Instagram</h2>
              <div className="media">
                {instagram.map(card => (
                  <InstagramCard
                    hreference={card.url}
                    imageUrl={card.img}
                    key={card.url}
                  />
                ))}
              </div>
            </section>
          </>
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
