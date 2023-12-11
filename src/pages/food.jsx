import React from 'react'
import './menuPages.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import menu from '../docs/angel8_menu.pdf'

import MenuSection from '../components/MenuSection/MenuSection'

import { brunch } from '../data/food/brunch'
import { desserts } from '../data/food/deserts'
import { grillHot } from '../data/food/grillHot'
import { grillSteaks } from '../data/food/grillSteaks'
import { salads } from '../data/food/salads'
import { soups } from '../data/food/soups'
import { starters } from '../data/food/starters'

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

              <MenuSection title="ПОЗДНИЙ ЗАВТРАК 12:00-15:00" data={brunch} />
              <MenuSection title="ЗАКУСКИ / САЛАТЫ" data={salads} />
              <MenuSection title="СУПЫ" data={soups} />
              <MenuSection title="GRILL / ГОРЯЧЕЕ" data={grillHot} />
              <MenuSection title="GRILL / STEAKS" data={grillSteaks} />
              <MenuSection
                title="ДЕСЕРТЫ/ МОРОЖЕНОЕ / СОРБЕТ"
                data={desserts}
              />
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default FoodPage
