import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="main-wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default Layout
