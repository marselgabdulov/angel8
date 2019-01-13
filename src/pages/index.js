import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Angel 8 bar, grill and wine. Эмоциональная кухня в Туле. Паназиатская
      кухня и блюда на гриле."
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <AniLink cover bg="#663399" to="/page-2/">
      Go to Page 2
    </AniLink>
  </Layout>
)

export default IndexPage
