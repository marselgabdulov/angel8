import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/seo'
// Components
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer'
import InstagramCard from '../components/InstagramCard/InstagramCard'
//  Styles
import './index.css'
import './indexSectionsStyles/Intro.scss'
import './indexSectionsStyles/About.scss'
import './indexSectionsStyles/Media.css'

// Video
import VideoMP4 from '../video/angel8bg2.mp4'
import VideoWEBM from '../video/angel8bg2.webm'

import { Fade } from 'react-slideshow-image'
import Img from 'gatsby-image'

function IndexPage(props) {
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
  }
  const instagram = [
    {
      url: 'https://www.instagram.com/angel_bar_grill/?hl=ru',
      img: props.data.logoInst.childImageSharp.fluid.src,
    },
    {
      url: 'https://www.instagram.com/p/Br-JhtlHC59/',
      img: props.data.command.childImageSharp.fluid.src,
    },
    {
      url: 'https://www.instagram.com/p/BsPx-oonHGk/',
      img: props.data.bottles.childImageSharp.fluid.src,
    },
    {
      url: 'https://www.instagram.com/p/BsNY__mntMs/',
      img: props.data.juice.childImageSharp.fluid.src,
    },
    {
      url: 'https://www.instagram.com/p/BsZ3AsRnAay/',
      img: props.data.some.childImageSharp.fluid.src,
    },
    {
      url: 'https://www.instagram.com/p/BrOGbVbFugw/',
      img: props.data.david.childImageSharp.fluid.src,
    },
    {
      url: 'https://www.instagram.com/p/Br4_77CHxnP/',
      img: props.data.asianFood.childImageSharp.fluid.src,
    },
    {
      url: 'https://www.instagram.com/p/BssD9J4nQQB/',
      img: props.data.bread.childImageSharp.fluid.src,
    },
  ]
  return (
    <Layout>
      <SEO title="Angel 8 | Эмоциональная кухня и бар в Туле. ✆ +7 4872 77 02 47" />
      <div className="index">
        <section className="intro">
          <div className="bg-video">
            <video loop autoPlay muted id="bg-video">
              <source type="video/webm" src={VideoWEBM} />
              <source type="video/mp4" src={VideoMP4} />
            </video>
            <div className="intro-hashtag">
              <h1>#Angel8</h1>
              <span>cocktails. grill. wine...</span>
            </div>
            <div className="intro-footer">
              <div className="intro-footer__working-times">
                <span>пн - чт и вс: 12.00 - 24: 00</span>
                <br />
                <span>пт - сб: 12.00 - 02: 00</span>
              </div>
              <div className="intro-footer__contacts">
                <a
                  href="mailto:angel8bar@gmail.com"
                  title="Напишите нам"
                  itemProp="email"
                >
                  angel8bar@gmail.com
                </a>
                <br />
                <a
                  href="tel:+74872770247"
                  title="Позвоните нам"
                  itemProp="telephone"
                >
                  +7 (4872) 77-02-47
                </a>
              </div>
              <div className="intro-footer__address">
                <span>г. Тула пр-т Ленина 85</span>
                <br />
                <span>кор. 1, вход 5</span>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="about__gallery">
            <Fade {...fadeProperties}>
              <div className="image-container">
                <Img fluid={props.data.intro_one.childImageSharp.fluid} />
              </div>
              <div className="image-container">
                <Img fluid={props.data.intro_two.childImageSharp.fluid} />
              </div>
              <div className="image-container">
                <Img fluid={props.data.intro_three.childImageSharp.fluid} />
              </div>
              <div className="image-container">
                <Img fluid={props.data.intro_four.childImageSharp.fluid} />
              </div>
            </Fade>
          </div>
          <div className="about__text">
            <h2 className="about__text--title">Эмоциональная кухня</h2>
            <p>
              Наши блюда готовятся в печи{' '}
              <a
                href="https://www.josper.es/ru/josper/about/"
                target="_blank"
                rel="noopener noreferrer"
                title="О печах Josper"
              >
                Josper.
              </a>
            </p>
            <p>Классические коктейли из первоисточников.</p>
            <p>Хороший выбор вина в правильных бокалах.</p>
            <p>
              Восьмерка как символ бесконечности,​ разделение мира на две
              основные составляющие – дух и материю, соединение неба и земли.
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
      fluid(maxWidth: 1200) {
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
    intro_one: file(relativePath: { eq: "intro/intro_one.jpg" }) {
      ...fluidInstagramImage
    }
    intro_two: file(relativePath: { eq: "intro/intro_two.jpg" }) {
      ...fluidInstagramImage
    }
    intro_three: file(relativePath: { eq: "intro/intro_three.jpg" }) {
      ...fluidInstagramImage
    }
    intro_four: file(relativePath: { eq: "intro/intro_four.jpg" }) {
      ...fluidInstagramImage
    }
  }
`

export default IndexPage
