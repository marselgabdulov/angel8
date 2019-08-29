import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/seo'
// Components
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer'
//  Styles
import './index.css'
import './indexSectionsStyles/Intro.scss'
import './indexSectionsStyles/About.scss'

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
                <Img fluid={props.data.about_one.childImageSharp.fluid} />
              </div>
              <div className="image-container">
                <Img fluid={props.data.about_two.childImageSharp.fluid} />
              </div>
              <div className="image-container">
                <Img fluid={props.data.about_three.childImageSharp.fluid} />
              </div>
              <div className="image-container">
                <Img fluid={props.data.about_four.childImageSharp.fluid} />
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
        <Footer />
      </div>
    </Layout>
  )
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
    about_one: file(relativePath: { eq: "intro/about_one.jpg" }) {
      ...fluidImage
    }
    about_two: file(relativePath: { eq: "intro/about_two.jpg" }) {
      ...fluidImage
    }
    about_three: file(relativePath: { eq: "intro/about_three.jpg" }) {
      ...fluidImage
    }
    about_four: file(relativePath: { eq: "intro/about_four.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
