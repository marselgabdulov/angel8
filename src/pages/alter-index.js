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

function AlterIndexPage(props) {
  return (
    <>
      <Layout>
        <SEO title="Angel 8 | Эмоциональная кухня и бар в Туле. ✆ +7 4872 77 02 47" />
        <div id="index"></div>
      </Layout>
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
    intro_image: file(relativePath: { eq: "intro/intro.jpg" }) {
      ...fluidImage
    }
    about_one: file(relativePath: { eq: "about/about_one.jpg" }) {
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

export default AlterIndexPage
