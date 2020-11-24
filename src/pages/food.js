import React from 'react'
import './menuPages.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import menu from '../docs/angel8_menu.pdf'

import MenuSection from '../components/MenuSection/MenuSection'

import {
  brunch,
  starters,
  salads,
  soups,
  hotAndGrill,
  desserts,
} from '../data/menu.js'

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

              <MenuSection title="ПОЗДНИЕ ЗАВТРАКИ 12:00-15:00" data={brunch} />
              <MenuSection title="ЗАКУСКИ" data={starters} />
              <MenuSection title="САЛАТЫ" data={salads} />
              <MenuSection title="СУПЫ" data={soups} />
              <MenuSection title="ГРИЛЬ & ГОРЯЧЕЕ" data={hotAndGrill} />
              <MenuSection title="ДЕСЕРТЫ" data={desserts} />
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default FoodPage
