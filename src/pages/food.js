import React from 'react'
import './menuPages.css'
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer'

import SimpleMenuPosition from '../components/SimpleMenuPosition/SimpleMenuPosition'
import { starters, salads, soups, hotAndGrill, desserts } from '../data/menu.js'

class FoodPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <Layout>
          <div className="wrapper">
            <div className="menu-page">
              <span className="menu-page__sign">\ \ \</span>
              <div className="menu-page__wrapper">
                <span className="menu-page__section-title">ЗАКУСКИ</span>
                {starters.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
                <span className="menu-page__section-title">САЛАТЫ</span>
                {salads.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
                <span className="menu-page__section-title">СУПЫ</span>
                {soups.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
                <span className="menu-page__section-title">
                  ГРИЛЬ & ГОРЯЧЕЕ
                </span>
                {hotAndGrill.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
                <span className="menu-page__section-title">ДЕСЕРТЫ</span>
                {desserts.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </Layout>
        <Footer />
      </>
    )
  }
}

export default FoodPage
