import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import './404.css'

const NotFoundPage = () => (
  <Layout>
    <div className="four-zero-four">
      <SEO title="404: Not found" />
      <h1 className="four-zero-four__title">404</h1>
      <p className="four-zero-four__description">
        Вы зашли на страницу, которой не существует. Какая досада...
      </p>
      <br />
      <br />
      <div className="four-zero-four__link">
        <AniLink
          to="/"
          cover
          bg="#181818"
          activeStyle={{
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          На главную
        </AniLink>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
