import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { graphql } from 'gatsby'
import Footer from '../components/Footer/Footer'

import SEO from '../components/seo'
// Components
import Layout from '../components/layout'
import ArrowToSection from '../components/ArrowToSection/ArrowToSection'
import IntroSection from '../components/IntroSection/IntroSection'
import AboutSection from '../components/AboutSection/AboutSection'
import TeamSection from '../components/TeamSection/TeamSection'

import InstagramLogo from '../assets/instagram-logo.svg'
import FacebookLogo from '../assets/facebookAlt.svg'

import { window } from 'browser-monads'

//  Styles
import './index.scss'
import classnames from 'classnames'

function IndexPage(props) {
  const sections = ['intro', 'about', 'team']
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
      image: props.data.Konstantin.childImageSharp.fluid,
      name: 'Константин Комаров',
      position: 'шеф-бармен',
      projects: 'Noor, Gipsy, Bar 30/7, Уголёк',
    },
    {
      id: 3,
      image: props.data.Sergey.childImageSharp.fluid,
      name: 'Сергей Захаров',
      position: 'шеф-сомелье',
      projects: 'Bar 30/7, Gipsy, Noor, Уголёк, Северяне',
    },
    {
      id: 4,
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
    intro_image: file(relativePath: { eq: "intro/ES-2.jpg" }) {
      ...fluidImage
    }
    about_one: file(relativePath: { eq: "about/about.jpg" }) {
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
