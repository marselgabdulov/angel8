import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { graphql } from 'gatsby'
import Footer from '../components/Footer/Footer'

import SEO from '../components/seo'
// Components
import Layout from '../components/layout'
import ArrowToSection from '../components/ArrowToSection/ArrowToSection'
import IntroSection from '../components/sections/Intro/Intro'
import AboutSection from '../components/sections/About/About'
import TeamSection from '../components/sections/Team/Team'
import ImagesSection from '../components/sections/Images/Images'
import VideoSection from '../components/sections/Video/Video'

import InstagramLogo from '../assets/instagram-logo.svg'

import { window } from 'browser-monads'

//  Styles
import './index.scss'
import classnames from 'classnames'

function IndexPage(props) {
  const sections = ['intro', 'about', 'images', 'video', 'team']
  const [currentSection, setCurrentSection] = useState({ isFinal: false })
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      setCurrentSection({ isFinal: true })
    } else {
      setCurrentSection({ isFinal: false })
    }
  }, [inView])

  useEffect(() => {
    executeScroll(document.getElementById(sections[currentSectionIndex]))
  }, [currentSectionIndex])

  function executeScroll(el) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: el.offsetTop,
    })
  }

  function handleTargetSection() {
    if (currentSectionIndex !== sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
    } else {
      setCurrentSectionIndex(0)
    }
  }

  const teamData = [
    {
      id: 1,
      image: props.data.Arman.childImageSharp.fluid,
      name: 'Арман Хачатрян',
      position: 'шеф-повар',
      projects: 'Рагу, Тайский слон, Моментс',
      about: 'ученик Алексея Зимина и Ильи Шалева',
    },
    {
      id: 2,
      image: props.data.Michael.childImageSharp.fluid,
      name: 'Михаил Корчагин',
      position: 'су-шеф',
      projects: 'Angel8',
    },
    {
      id: 3,
      image: props.data.Lado.childImageSharp.fluid,
      name: 'Ладо Прангишвили',
      position: 'идейный вдохновитель',
      projects:
        'Bar 30/7, Simachev Bar, Dodo Pizza Express, Zю кафе, Time out Bar, Северяне',
    },
  ]

  return (
    <>
      <Layout>
        <SEO title="Angel 8 | Эмоциональная кухня и бар в Туле. ✆ +7 4872 77 02 47" />
        <div id="index">
          <div
            className={classnames('index__scroll-button', {
              'index__scroll-button--changed': currentSection.isFinal,
            })}
          >
            <ArrowToSection handleClick={() => handleTargetSection()} />
          </div>
          <div className="index__social">
            <a
              href="https://www.instagram.com/angel_bar_grill/?hl=ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo />
            </a>
          </div>
          <IntroSection
            introImage={props.data.intro_image.childImageSharp.fluid}
          />
          <AboutSection img={props.data.about_one.childImageSharp.fluid} />
          <ImagesSection
            vertical_1={props.data.vertical_1.childImageSharp.fluid}
            vertical_2={props.data.vertical_2.childImageSharp.fluid}
            vertical_3={props.data.vertical_3.childImageSharp.fluid}
            vertical_4={props.data.vertical_4.childImageSharp.fluid}
            vertical_5={props.data.vertical_5.childImageSharp.fluid}
            vertical_6={props.data.vertical_6.childImageSharp.fluid}
            vertical_7={props.data.vertical_7.childImageSharp.fluid}
            vertical_8={props.data.vertical_8.childImageSharp.fluid}
            vertical_9={props.data.vertical_9.childImageSharp.fluid}
            quadrant_1={props.data.quadrant_1.childImageSharp.fluid}
            quadrant_2={props.data.quadrant_2.childImageSharp.fluid}
            quadrant_3={props.data.quadrant_3.childImageSharp.fluid}
            quadrant_4={props.data.quadrant_4.childImageSharp.fluid}
            horizontal_1={props.data.horizontal_1.childImageSharp.fluid}
            horizontal_2={props.data.horizontal_2.childImageSharp.fluid}
            vertical_10={props.data.vertical_10.childImageSharp.fluid}
            vertical_11={props.data.vertical_11.childImageSharp.fluid}
            vertical_12={props.data.vertical_12.childImageSharp.fluid}
            vertical_13={props.data.vertical_13.childImageSharp.fluid}
            vertical_14={props.data.vertical_14.childImageSharp.fluid}
            vertical_15={props.data.vertical_15.childImageSharp.fluid}
          />
          <VideoSection />
          <div className="final-section" ref={ref}>
            <TeamSection teamData={teamData} />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
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
    intro_image: file(relativePath: { eq: "intro/barCounter.jpg" }) {
      ...fluidImage
    }
    about_one: file(relativePath: { eq: "about/about.jpg" }) {
      ...fluidImage
    }
    Lado: file(relativePath: { eq: "team/Lado2.jpg" }) {
      ...fluidImage
    }
    Michael: file(relativePath: { eq: "team/Michael.jpeg" }) {
      ...fluidImage
    }
    Arman: file(relativePath: { eq: "team/Arman2.jpg" }) {
      ...fluidImage
    }
    vertical_1: file(relativePath: { eq: "images_section/ES-13.jpg" }) {
      ...fluidImage
    }
    vertical_2: file(relativePath: { eq: "images_section/desert.jpg" }) {
      ...fluidImage
    }
    vertical_3: file(relativePath: { eq: "images_section/shrimps.jpg" }) {
      ...fluidImage
    }
    vertical_4: file(relativePath: { eq: "images_section/wine-glass.jpg" }) {
      ...fluidImage
    }
    vertical_5: file(relativePath: { eq: "images_section/ES-76.jpg" }) {
      ...fluidImage
    }
    vertical_6: file(relativePath: { eq: "images_section/breakfast.jpg" }) {
      ...fluidImage
    }
    vertical_7: file(relativePath: { eq: "images_section/ES-26.jpg" }) {
      ...fluidImage
    }
    vertical_8: file(relativePath: { eq: "images_section/ES-52.jpg" }) {
      ...fluidImage
    }
    vertical_9: file(relativePath: { eq: "images_section/ES-35.jpg" }) {
      ...fluidImage
    }
    vertical_10: file(
      relativePath: { eq: "images_section/cocktail_tree.jpg" }
    ) {
      ...fluidImage
    }
    vertical_11: file(relativePath: { eq: "images_section/cocktail_sun.jpg" }) {
      ...fluidImage
    }
    vertical_12: file(
      relativePath: { eq: "images_section/cocktail_fire.jpg" }
    ) {
      ...fluidImage
    }
    vertical_13: file(relativePath: { eq: "images_section/back_1.jpg" }) {
      ...fluidImage
    }
    vertical_14: file(relativePath: { eq: "images_section/back_2.jpg" }) {
      ...fluidImage
    }
    vertical_15: file(relativePath: { eq: "images_section/back_3.jpg" }) {
      ...fluidImage
    }
    quadrant_1: file(relativePath: { eq: "images_section/desert2.jpg" }) {
      ...fluidImage
    }
    quadrant_2: file(relativePath: { eq: "images_section/flower.jpg" }) {
      ...fluidImage
    }
    quadrant_3: file(relativePath: { eq: "images_section/tar-tar.jpg" }) {
      ...fluidImage
    }
    quadrant_4: file(relativePath: { eq: "images_section/knife.jpg" }) {
      ...fluidImage
    }
    horizontal_1: file(relativePath: { eq: "images_section/cooks1.jpg" }) {
      ...fluidImage
    }
    horizontal_2: file(relativePath: { eq: "images_section/ES-5.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
