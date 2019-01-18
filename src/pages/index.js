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
        img: this.props.data.logo_inst.childImageSharp.fluid.src,
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
        img: this.props.data.last.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BrOGbVbFugw/',
        img: this.props.data.david.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/Br4_77CHxnP/',
        img: this.props.data.asian_food.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BssD9J4nQQB/',
        img: this.props.data.bread_inst.childImageSharp.fluid.src,
      },
    ]
    return (
      <Layout>
        <SEO title="Angel 8 bar, grill and wine." />
        <div className="index">
          <section className="intro">
            <div className="intro__background" />
            <div className="intro__text">
              <h1 className="intro__title">
                <span
                  data-aos="fade"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  Эмоциональная
                </span>
                <br />
                <span
                  data-aos="fade"
                  data-aos-delay="150"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  кухня
                </span>
                <br />
                <span
                  data-aos="fade"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  в Туле
                </span>
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
                        this.props.data.bread.childImageSharp.fluid.src
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
                  <div
                    style={{
                      backgroundImage: `url(${
                        this.props.data.mix.childImageSharp.fluid.src
                      })`,
                    }}
                  />
                </Fade>
              </div>
            </div>
          </section>
          <section className="about">
            <div
              className="about__image"
              style={{
                backgroundImage: `url(${
                  this.props.data.table.childImageSharp.fluid.src
                })`,
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
          <>
            <h2 className="media__title">Instagram</h2>
            <section className="media">
              {instagram.map(card => (
                <InstagramCard
                  hreference={card.url}
                  imageUrl={card.img}
                  key={card.url}
                />
              ))}
            </section>
          </>
          <Footer />
        </div>
      </Layout>
    )
  }
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1900) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    bread: file(relativePath: { eq: "intro/bread.jpg" }) {
      ...fluidImage
    }
    mix: file(relativePath: { eq: "intro/mix.jpg" }) {
      ...fluidImage
    }
    soup: file(relativePath: { eq: "intro/soup.jpg" }) {
      ...fluidImage
    }
    people: file(relativePath: { eq: "description/people.jpg" }) {
      ...fluidImage
    }
    table: file(relativePath: { eq: "description/table.jpg" }) {
      ...fluidImage
    }
    kitchen: file(relativePath: { eq: "description/kitchen.jpg" }) {
      ...fluidImage
    }
    logo_inst: file(relativePath: { eq: "instagram/logo.jpg" }) {
      ...fluidImage
    }
    command: file(relativePath: { eq: "instagram/command.jpg" }) {
      ...fluidImage
    }
    bottles: file(relativePath: { eq: "instagram/bottles.jpg" }) {
      ...fluidImage
    }
    david: file(relativePath: { eq: "instagram/david.jpg" }) {
      ...fluidImage
    }
    juice: file(relativePath: { eq: "instagram/juice.jpg" }) {
      ...fluidImage
    }
    last: file(relativePath: { eq: "instagram/last.jpg" }) {
      ...fluidImage
    }
    asian_food: file(relativePath: { eq: "instagram/asian_food.jpg" }) {
      ...fluidImage
    }
    bread_inst: file(relativePath: { eq: "instagram/bread.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
