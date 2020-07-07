import React from 'react'
import './menuPages.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import menu from '../docs/angel8_menu.pdf'

import SimpleMenuPosition from '../components/SimpleMenuPosition/SimpleMenuPosition'
import { starters, salads, soups, hotAndGrill, desserts } from '../data/menu.js'

class FoodPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <SEO title="Меню Блюда" />
        <Layout>
          <div className="menu-page">
            <div className="menu-page__wrapper">
              <h1>Блюда</h1>
              <a href={menu} download>
                Скачать меню PDF
              </a>
              {/* <div className="menu-page__section-title">
                    ПОЗДНИЕ ЗАВТРАКИ 12:00-15:00
                  </div>
                  <div className="menu-page__section-subtitle">Яйца & Хлеб</div>
                  {brunch.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))} */}
              <section className="menu-page__section">
                <span className="menu-page__section-title">ЗАКУСКИ</span>
                {starters.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
              </section>
              <section className="menu-page__section">
                <span className="menu-page__section-title">САЛАТЫ</span>
                {salads.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
              </section>
              <section className="menu-page__section">
                <span className="menu-page__section-title">СУПЫ</span>
                {soups.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
              </section>
              <section className="menu-page__section">
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
              </section>
              <section className="menu-page__section--last">
                <span className="menu-page__section-title">ДЕСЕРТЫ</span>
                {desserts.map(position => (
                  <SimpleMenuPosition
                    key={position.id}
                    name={position.name}
                    price={position.price}
                  />
                ))}
              </section>
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default FoodPage
