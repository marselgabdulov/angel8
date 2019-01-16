import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer'
import InstagramCard from '../components/InstagramCard/InstagramCard'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import './index.css'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  render() {
    const introImages = [
      this.props.data.bread.childImageSharp.fluid.src,
      this.props.data.soup.childImageSharp.fluid.src,
      this.props.data.mix.childImageSharp.fluid.src,
    ]

    return (
      <Layout>
        <SEO title="Angel 8 bar, grill and wine." />
        <div className="index">
          <section className="index__intro">
            <div className="index__intro--background" />
            <div className="index__intro-slogan">
              <h1 className="index__intro-slogan--title">
                <span
                  data-aos="fade"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  Эмоциональная
                </span>
                <span
                  data-aos="fade"
                  data-aos-delay="150"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  кухня
                </span>
                <span
                  data-aos="fade"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  в Туле
                </span>
              </h1>
              <span className="index__intro-slogan--address">
                пр-т Ленина д.85 кор. 1
              </span>
            </div>

            <div
              className="index__intro--gallery"
              data-aos="fade"
              data-aos-delay="150"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <ImageGallery images={introImages} />
            </div>
          </section>
          <section className="index__description">
            <div
              className="index__description--image"
              style={{
                backgroundImage: `url(${
                  this.props.data.table.childImageSharp.fluid.src
                })`,
              }}
            />
            <div
              className="index__description--text"
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

          <h2 className="index__media--title">Instagram</h2>
          <section className="index__media">
            <InstagramCard
              hreference="https://www.instagram.com/angel_bar_grill/?hl=ru"
              imageUrl={this.props.data.logo_inst.childImageSharp.fluid.src}
            />
            <InstagramCard
              hreference="https://www.instagram.com/p/Br-JhtlHC59/"
              imageUrl={this.props.data.command.childImageSharp.fluid.src}
            />
            <InstagramCard
              hreference="https://www.instagram.com/p/BsPx-oonHGk/"
              imageUrl={this.props.data.bottles.childImageSharp.fluid.src}
            />
            <InstagramCard
              hreference="https://www.instagram.com/p/BsNY__mntMs/"
              imageUrl={this.props.data.juice.childImageSharp.fluid.src}
            />
            <InstagramCard
              hreference="https://www.instagram.com/p/BsZ3AsRnAay/"
              imageUrl={this.props.data.last.childImageSharp.fluid.src}
            />
            <InstagramCard
              hreference="https://www.instagram.com/p/BrOGbVbFugw/"
              imageUrl={this.props.data.david.childImageSharp.fluid.src}
            />
            <InstagramCard
              hreference="https://www.instagram.com/p/Br4_77CHxnP/"
              imageUrl={this.props.data.asian_food.childImageSharp.fluid.src}
            />
            <InstagramCard
              hreference="https://www.instagram.com/p/BssD9J4nQQB/"
              imageUrl={this.props.data.bread_inst.childImageSharp.fluid.src}
            />
          </section>
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
