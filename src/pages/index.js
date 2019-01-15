import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import './index.css'
import SEO from '../components/seo'
import coverImage from '../images/logo-white-full.png'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Angel 8 bar, grill and wine. Эмоциональная кухня в Туле. Паназиатская
          кухня и блюда на гриле."
        />
        <div className="index">
          <section
            className="index__cover"
            style={{
              backgroundImage: `url(${
                this.props.data.cover.childImageSharp.fluid.src
              })`,
            }}
          />
          <div className="index__cover-text">
            <div
              className="index__cover-title"
              data-aos="fade"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <span className="index__cover-title-one">
                Эмоциональная <br />
              </span>
              <span className="index__cover-title-two">
                кухня <br />
              </span>
              <span className="index__cover-title-three">в Туле</span>
            </div>
          </div>
          <section className="index__description">
            <div
              className="index__description-image"
              style={{
                backgroundImage: `url(${
                  this.props.data.description.childImageSharp.fluid.src
                })`,
              }}
            />
            <div
              className="index__description-text"
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

          <section className="home__media">
            <a
              href="https://www.instagram.com/angel_bar_grill/?hl=ru"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-one"
              style={{
                backgroundImage: `url(${
                  this.props.data.logo_inst.childImageSharp.fluid.src
                })`,
              }}
            />
            <a
              href="https://www.instagram.com/p/BsNY__mntMs/"
              className="home__media-item-two"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundImage: `url(${
                  this.props.data.command.childImageSharp.fluid.src
                })`,
              }}
            >
              2
            </a>
            <a
              href="https://www.instagram.com/p/BsPx-oonHGk/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-three"
              style={{
                backgroundImage: `url(${
                  this.props.data.bottles.childImageSharp.fluid.src
                })`,
              }}
            >
              3
            </a>
            <a
              href="https://www.instagram.com/p/BsZ3AsRnAay/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-four"
              style={{
                backgroundImage: `url(${
                  this.props.data.juice.childImageSharp.fluid.src
                })`,
              }}
            />
            <a
              href="https://www.instagram.com/p/Br-JhtlHC59/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-five"
              style={{
                backgroundImage: `url(${
                  this.props.data.last.childImageSharp.fluid.src
                })`,
              }}
            />
            <a
              href="https://www.instagram.com/p/Br4_77CHxnP/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-six"
              style={{
                backgroundImage: `url(${
                  this.props.data.david.childImageSharp.fluid.src
                })`,
              }}
            />
            <a
              href="https://www.instagram.com/p/BrOGbVbFugw/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-seven"
              style={{
                backgroundImage: `url(${
                  this.props.data.asian_food.childImageSharp.fluid.src
                })`,
              }}
            />
          </section>
        </div>
      </Layout>
    )
  }
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "cover2.jpg" }) {
      ...fluidImage
    }
    description: file(relativePath: { eq: "description.jpg" }) {
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
  }
`

export default IndexPage
