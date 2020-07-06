import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/seo'
// Components
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer'
//  Styles
import './index.scss'

// Video
import VideoMP4 from '../video/angel8bg2.mp4'
import VideoWEBM from '../video/angel8bg2.webm'
import menu from '../docs/angel8_menu.pdf'
import { Fade } from 'react-slideshow-image'
import Img from 'gatsby-image'

function IndexPage(props) {
  const fadeProperties = {
    duration: 3000,
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
            <div className="intro-slogan">
              <h1>Эмоциональная кухня</h1>
              <span>ресторан. гриль. бар.</span>
            </div>
            <div className="intro-footer">
              <div className="intro-footer__address">
                <span>Тула проспект Ленина 85</span>
                <br />
                <span>корпус 1, вход 5</span>
                <br />
                <a href="tel:+74872770247" itemProp="telephone">
                  +7 (4872) 77-02-47
                </a>
              </div>
              <div className="intro-footer__menu-download">
                <a href={menu} download>
                  Скачать меню PDF
                </a>
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
            <h2 className="about__text--title">О нас</h2>
            <p>
              Авторская кухня. Специализируемся на приготовлении на гриле. Наши
              блюда готовятся в печи{' '}
              <a
                href="https://www.josper.es/ru/josper/about/"
                target="_blank"
                rel="noopener noreferrer"
                title="О печах Josper"
              >
                Josper.
              </a>
            </p>
            <p>
              Классические и фирменные коктейли. <br />
              Хороший выбор вина в правильных бокалах.
            </p>
            <p>
              Вы найдете нас на проспекте Ленина, дом 85, корпус 5, вход 1 на
              территории торгово-делового квартала&nbsp;
              <a
                className="index__link"
                href="http://likerka-loft.ru/"
                target="_blank"
                rel="noopener noreferrer"
                title="Сайт likerka-loft.ru"
              >
                &laquo;Ликерка Лофт&raquo;
              </a>
            </p>
          </div>
        </section>
        <section className="team">
          <h2>Команда Angel 8</h2>
          <div className="team-cards">
            <div className="team-card">
              <Img
                fluid={props.data.Arman.childImageSharp.fluid}
                className="team-image"
              ></Img>
              <div className="card-info">
                <div className="card-name">Арман Хачатрян</div>
                <div className="card-position">
                  <b>шеф-повар</b>
                </div>
                <p className="card-experience">
                  <b>проекты</b> : Рагу,&nbsp; Тайский слон&nbsp;,
                  Моментс,&nbsp; ученик{' '}
                  <a
                    href="https://ruspekh.ru/people/item/zimin-aleksej-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Алексея Зимина
                  </a>{' '}
                  и{' '}
                  <a
                    href="http://www.timeout.ru/msk/person/27003"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    Ильи Шалева
                  </a>
                  &nbsp; (г.Москва)
                </p>
              </div>
            </div>
            <div className="team-card">
              <Img
                fluid={props.data.Konstantin.childImageSharp.fluid}
                className="team-image"
              ></Img>
              <div className="card-info">
                <div className="card-name">Константин Комаров</div>
                <div className="card-position">
                  <b>шеф-бармен</b>
                </div>
                <p className="card-experience">
                  <b>проекты</b> : Noor,&nbsp; Gipsy,&nbsp; Bar 30/7,&nbsp;
                  Уголёк&nbsp;(г.Москва)
                </p>
              </div>
            </div>
            <div className="team-card">
              <Img
                fluid={props.data.Sergey.childImageSharp.fluid}
                className="team-image"
              ></Img>
              <div className="card-info">
                <div className="card-name">Сергей Захаров</div>
                <div className="card-position">
                  <b>шеф-сомелье</b>
                </div>
                <p className="card-experience">
                  <b>проекты</b> : Bar 30/7,&nbsp; Gipsy,&nbsp; Noor,&nbsp;
                  Уголёк,&nbsp; Северяне&nbsp; (г.Москва)
                </p>
              </div>
            </div>
            <div className="team-card">
              <Img
                fluid={props.data.Lado.childImageSharp.fluid}
                className="team-image"
              ></Img>
              <div className="card-info">
                <div className="card-name">Ладо Прангишвили</div>
                <div className="card-position">
                  <b>идейный вдохновитель</b>
                </div>
                <p className="card-experience">
                  <b>проекты</b> : Bar 30/7,&nbsp; Simachev Bar,&nbsp;
                  Dodo,&nbsp; Pizza Express и Zю кафе,&nbsp; Time out Bar,&nbsp;
                  Северяне&nbsp; (г.Москва)
                </p>
              </div>
            </div>
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
    about_one: file(relativePath: { eq: "about/about_one.jpg" }) {
      ...fluidImage
    }
    about_two: file(relativePath: { eq: "about/about_two.jpg" }) {
      ...fluidImage
    }
    about_three: file(relativePath: { eq: "about/about_three.jpg" }) {
      ...fluidImage
    }
    about_four: file(relativePath: { eq: "about/about_four.jpg" }) {
      ...fluidImage
    }
    Lado: file(relativePath: { eq: "team/Lado.jpg" }) {
      ...fluidImage
    }
    Sergey: file(relativePath: { eq: "team/Sergey.jpg" }) {
      ...fluidImage
    }
    Konstantin: file(relativePath: { eq: "team/Konstantin.jpg" }) {
      ...fluidImage
    }
    Arman: file(relativePath: { eq: "team/Arman.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
