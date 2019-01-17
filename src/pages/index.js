import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer'
import './index.css'
import SEO from '../components/seo'

// Sections
import Intro from './sections/Intro/Intro'
import About from './sections/About/About'
import Media from './sections/Media/Media'

class IndexPage extends React.Component {
  render() {
    const introImages = [
      this.props.data.bread.childImageSharp.fluid.src,
      this.props.data.soup.childImageSharp.fluid.src,
      this.props.data.mix.childImageSharp.fluid.src,
    ]

    const instagram = [
      {
        url: 'https://www.instagram.com/angel_bar_grill/?hl=ru',
        img: this.props.data.logo_inst.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/Br-JhtlHC59/',
        img: this.props.data.command.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BsPx-oonHGk/',
        img: this.props.data.bottles.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BsNY__mntMs/',
        img: this.props.data.juice.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BsZ3AsRnAay/',
        img: this.props.data.last.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BrOGbVbFugw/',
        img: this.props.data.david.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/Br4_77CHxnP/',
        img: this.props.data.asian_food.childImageSharp.fluid.src,
      },
      {
        url: 'https://www.instagram.com/p/BssD9J4nQQB/',
        img: this.props.data.bread_inst.childImageSharp.fluid.src,
      },
    ]
    return (
      <Layout>
        <SEO title="Angel 8 bar, grill and wine." />
        <div className="index">
          <Intro introImages={introImages} />
          <About bgImage={this.props.data.table.childImageSharp.fluid.src} />
          <Media instagram={instagram} />
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
