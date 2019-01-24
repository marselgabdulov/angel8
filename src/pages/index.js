import React from 'react'
import { graphql } from 'gatsby'
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
        img: this.props.data.logoInst.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/Br-JhtlHC59/',
        img: this.props.data.command.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BsPx-oonHGk/',
        img: this.props.data.bottles.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BsNY__mntMs/',
        img: this.props.data.juice.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BsZ3AsRnAay/',
        img: this.props.data.some.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BrOGbVbFugw/',
        img: this.props.data.david.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/Br4_77CHxnP/',
        img: this.props.data.asianFood.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BssD9J4nQQB/',
        img: this.props.data.bread.childImageSharp.fluid.src,
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
                <span>Эмоциональная &nabsp;</span>
                <br />
                <span>кухня&nabsp;</span>
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
                      backgroundImage: `url(${
                        this.props.data.introBread.childImageSharp.fluid.src
                      })`,
                    }}
                  />
                  <div
                    style={{
                      backgroundImage: `url(${
                        this.props.data.mix.childImageSharp.fluid.src
                      })`,
                    }}
                  />
                  <div
                    style={{
                      backgroundImage: `url(${
                        this.props.data.soup.childImageSharp.fluid.src
                      })`,
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
                  backgroundImage: `url(${
                    this.props.data.bar.childImageSharp.fluid.src
                  })`,
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
                <AniLink to="/food" cover bg="#181818" title="Меню | Блюда">
                  Кухне.
                </AniLink>
              </p>
              <p>
                У нас самый широкий выбор как традиционных напитков, так и наших
                фирменных коктейлей. Загляните в наш &nbsp;
                <AniLink to="/drinks" cover bg="#181818" title="Меню | Напитки">
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
                <AniLink to="/contacts" cover bg="#181818" title="Контакты">
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

export const fluidInstagramImage = graphql`
  fragment fluidInstagramImage on File {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    asianFood: file(relativePath: { eq: "instagram/asian_food.jpg" }) {
      ...fluidInstagramImage
    }
    bottles: file(relativePath: { eq: "instagram/bottles.jpg" }) {
      ...fluidInstagramImage
    }
    bread: file(relativePath: { eq: "instagram/bread.jpg" }) {
      ...fluidInstagramImage
    }
    command: file(relativePath: { eq: "instagram/command.jpg" }) {
      ...fluidInstagramImage
    }
    david: file(relativePath: { eq: "instagram/david.jpg" }) {
      ...fluidInstagramImage
    }
    juice: file(relativePath: { eq: "instagram/juice.jpg" }) {
      ...fluidInstagramImage
    }
    some: file(relativePath: { eq: "instagram/some.jpg" }) {
      ...fluidInstagramImage
    }
    logoInst: file(relativePath: { eq: "instagram/logo.jpg" }) {
      ...fluidInstagramImage
    }
    mix: file(relativePath: { eq: "intro/mix.jpg" }) {
      ...fluidInstagramImage
    }
    introBread: file(relativePath: { eq: "intro/bread.jpg" }) {
      ...fluidInstagramImage
    }
    soup: file(relativePath: { eq: "intro/soup.jpg" }) {
      ...fluidInstagramImage
    }
    bar: file(relativePath: { eq: "about/bar.jpg" }) {
      ...fluidInstagramImage
    }
  }
`

export default IndexPage
