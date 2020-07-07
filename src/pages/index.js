import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/seo'
// Components
import Layout from '../components/layout'
import IntroSection from '../components/IntroSection/IntroSection'
import AboutSection from '../components/AboutSection/AboutSection'
import TeamSection from '../components/TeamSection/TeamSection'
//  Styles
import './index.scss'

function IndexPage(props) {
  const aboutImages = [
    props.data.about_one.childImageSharp.fluid,
    props.data.about_two.childImageSharp.fluid,
    props.data.about_three.childImageSharp.fluid,
    props.data.about_four.childImageSharp.fluid,
  ]

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
        'Bar 30/7, Simachev Bar,Dodo, Pizza Express и Zю кафе, Time out Bar, Северяне',
    },
  ]

  return (
    <Layout>
      <SEO title="Angel 8 | Эмоциональная кухня и бар в Туле. ✆ +7 4872 77 02 47" />
      <div id="index">
        <IntroSection />
        <AboutSection images={aboutImages} />
        <TeamSection teamData={teamData} />
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
