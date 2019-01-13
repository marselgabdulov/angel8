import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import './index.css'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Angel 8 bar, grill and wine. Эмоциональная кухня в Туле. Паназиатская
          кухня и блюда на гриле."
        />
        <div className="home-page">
          <section className="home-page__cover">
            <div>
              <h1
                className="home-page__cover-title"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <span>
                  Эмоциональная <br />
                </span>
                <span>
                  кухня <br />
                </span>
                <span>в Туле</span>
              </h1>
            </div>

            <img
              className="home-page__cover-image"
              data-aos="fade"
              data-aos-delay="300"
              data-aos-duration="1200"
              src={this.props.data.cover.childImageSharp.fluid.src}
              alt="Cover Image"
            />
          </section>
          {/* <section className="home-page__description">
            <div className="home-page__description-image">
              <img
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                src={this.props.data.description.childImageSharp.fluid.src}
                alt="Cover Image"
              />
            </div>
            <div
              className="home-page__description-text"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h2>О нас</h2>
              <p>
                Мы находимся на территории торгово-делового квартала
                <a
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
          </section> */}

          {/* <section className="home__media">
            <div className="home__media-item-one">
              <span>Instagram</span>
            </div>
            <a
              href="https://www.instagram.com/p/BsNY__mntMs/"
              className="home__media-item-two"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                src={this.props.data.command.childImageSharp.fluid.src}
                alt="Cover Image"
              />
            </a>
            <a
              href="https://www.instagram.com/p/BsPx-oonHGk/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-three"
            >
              <img
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                src={this.props.data.bottles.childImageSharp.fluid.src}
                alt="Cover Image"
              />
            </a>
            <a
              href="https://www.instagram.com/p/BsZ3AsRnAay/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-four"
            >
              <img
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                src={this.props.data.juice.childImageSharp.fluid.src}
                alt="Cover Image"
              />
            </a>
            <a
              href="https://www.instagram.com/p/Br-JhtlHC59/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-five"
            >
              <img
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                src={this.props.data.last.childImageSharp.fluid.src}
                alt="Cover Image"
              />
            </a>
            <a
              href="https://www.instagram.com/p/Br4_77CHxnP/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-six"
            >
              <img
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                src={this.props.data.david.childImageSharp.fluid.src}
                alt="Cover Image"
              />
            </a>
            <a
              href="https://www.instagram.com/p/BrOGbVbFugw/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-seven"
            >
              <img
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                src={this.props.data.asian_food.childImageSharp.fluid.src}
                alt="Cover Image"
              />
            </a>
            <a
              href="https://www.instagram.com/angel_bar_grill/?hl=ru"
              target="_blank"
              rel="noopener noreferrer"
              className="home__media-item-eight"
            >
              <img
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                src={this.props.data.logo_inst.childImageSharp.fluid.src}
                alt="Cover Image"
              />
            </a>
          </section> */}
        </div>
      </Layout>
    )
  }
}

{
  /* <AniLink cover bg="#663399" to="/page-2/">
  Go to Page 2
</AniLink> */
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
