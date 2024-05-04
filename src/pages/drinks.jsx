import React from 'react'
import './menuPages.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import menuPDF from '../docs/angel8_menu.pdf'
import Submenu from '../components/Submenu/Submenu'
import MenuSection from '../components/MenuSection/MenuSection'

import { americanWhiskey } from '../data/drinks/americanWhiskey'
import { aperitif } from '../data/drinks/aperitif'
import { beer } from '../data/drinks/beer'
import { brandy } from '../data/drinks/brandy'
import { calvados } from '../data/drinks/calvados'
import { cocktails } from '../data/drinks/cocktails'
import { cocktailsSpecial } from '../data/drinks/cocktailsSpecial'
import { coffee } from '../data/drinks/coffee'
import { coffeeComplicated } from '../data/drinks/coffeeComplicated'
import { gin } from '../data/drinks/gin'
import { grappa } from '../data/drinks/grappa'
import { hotAlco } from '../data/drinks/hotAlco'
import { irishWhiskey } from '../data/drinks/irishWhiskey'
import { japanWhiskey } from '../data/drinks/japanWhiskey'
import { juices } from '../data/drinks/juices'
import { juicesFresh } from '../data/drinks/juicesFresh'
import { lemonades } from '../data/drinks/lemonades'
import { milkShakes } from '../data/drinks/milkShakes'
import { pisco } from '../data/drinks/pisco'
import { portoAndJerez } from '../data/drinks/portoAndJerez'
import { redWineBottle } from '../data/drinks/redWineBottle'
import { redWineGlass } from '../data/drinks/redWineGlass'
import { roseWineBottle } from '../data/drinks/roseWineBottle'
import { rumAndChacha } from '../data/drinks/rumAndcacha'
import { scotchWhiskeyBlend } from '../data/drinks/scotchWhiskeyBlend'
import { singleMalt } from '../data/drinks/singleMalt'
import { smoothies } from '../data/drinks/smoothies'
import { sparklingWine } from '../data/drinks/sparklingWine'
import { tea } from '../data/drinks/tea'
import { teaAltay } from '../data/drinks/teaAltay'
import { teaFruit } from '../data/drinks/teaFruit'
import { tequilaAndMezkal } from '../data/drinks/tequilaAndMezcal'
import { vermouth } from '../data/drinks/vermouth'
import { vodka } from '../data/drinks/vodka'
import { water } from '../data/drinks/water'
import { whiteAndRoseGlass } from '../data/drinks/whiteAndRoseGlass'
import { whiteWineBottle } from '../data/drinks/whiteWineBottle'

let linksData = [
  {
    id: 'whiteWineBottle',
    name: 'Вина Белые по бутылкам',
  },
  {
    id: 'redWineBottle',
    name: 'Вина Красные по бутылкам',
  },
  {
    id: 'sparklingWine',
    name: 'шампанское и игристое',
  },
  {
    id: 'roseWineBottle',
    name: 'розовые вина',
  },
  {
    id: 'whiteAndRoseGlass',
    name: 'Вина белые и розовые в бокалах 150 мл',
  },
  {
    id: 'redWineGlass',
    name: 'Вина красные по бокалам 150 мл',
  },
  {
    id: 'whiskey',
    name: 'Виски',
  },
  {
    id: 'tequila',
    name: 'Текила',
  },
  {
    id: 'portoAndJerez',
    name: 'Порто',
  },
  {
    id: 'vodka',
    name: 'Водка',
  },
  {
    id: 'rumAndChacha',
    name: 'Ром',
  },
  {
    id: 'gin',
    name: 'Джин',
  },
  {
    id: 'brandy',
    name: 'Коньяк/Бренди',
  },
  {
    id: 'calvados',
    name: 'Арманьяк/Кальвадос',
  },
  {
    id: 'grappa',
    name: 'Граппа',
  },
  {
    id: 'pisco',
    name: 'писко',
  },
  {
    id: 'aperitif',
    name: 'Аперитив/Дижестив',
  },
  {
    id: 'vermouth',
    name: 'Вермут',
  },
  {
    id: 'cocktails',
    name: 'Коктейли',
  },
  {
    id: 'water',
    name: 'Вода',
  },
  {
    id: 'smoothies',
    name: 'Смузи',
  },
  {
    id: 'lemonades',
    name: 'Лимонады',
  },
  {
    id: 'milkShakes',
    name: 'MILK SHAKES',
  },
  {
    id: 'juices',
    name: 'Соки',
  },
  {
    id: 'beer',
    name: 'Пиво',
  },
  {
    id: 'hotAlco',
    name: 'Горячие',
  },
  {
    id: 'tea',
    name: 'Чай',
  },
  {
    id: 'coffee',
    name: 'Кофе',
  },
]

function DrinksPage() {
  return (
    <>
      <SEO title="Меню Напитки" />
      <Layout>
        <div className="menu-page">
          <div className="menu-page__wrapper">
            <h1>Напитки</h1>
            <a href={menuPDF} download>
              Скачать меню PDF
            </a>
            <br />
            <Submenu linksData={linksData} />
            <div className="menu-page__submenu"></div>
            <MenuSection
              id="whiteWineBottle"
              title="Вина по бутылкам белые 750 мл"
              data={whiteWineBottle}
            />
            <MenuSection
              id="redWineBottle"
              title="Вина по бутылкам красные 750 мл"
              data={redWineBottle}
            />
            <MenuSection
              id="sparklingWine"
              title="Шампанское и игристое 150/750 мл"
              data={sparklingWine}
            />
            <MenuSection
              id="roseWineBottle"
              title="Вина розовые"
              data={roseWineBottle}
            />
            <MenuSection
              id="whiteAndRoseGlass"
              title="Вина белые по бокалам 150 мл"
              data={whiteAndRoseGlass}
            />
            <MenuSection
              id="redWineGlass"
              title="Вина красные по бокалам 150 мл"
              data={redWineGlass}
            />

            <section id="whiskey" className="menu-page__section">
              <span className="menu-page__section-title">ВИСКИ 50 мл</span>
              <br />

              <MenuSection
                title="Scotch Whiskey Blend"
                data={scotchWhiskeyBlend}
              />
              <MenuSection title="Single Malt" data={singleMalt} />
              <MenuSection title="Irish Whiskey" data={irishWhiskey} />
              <MenuSection title="American Whiskey" data={americanWhiskey} />
              <MenuSection title="Japanese Whiskey" data={japanWhiskey} />
            </section>
            <MenuSection
              id="tequila"
              title="ТЕКИЛА / MEСКАЛЬ 50 мл"
              data={tequilaAndMezkal}
            />
            <MenuSection
              id="portoAndJerez"
              title="ПОРТО / ШЕРРИ 75 мл"
              data={portoAndJerez}
            />
            <MenuSection id="vodka" title="ВОДКА 50 мл" data={vodka} />
            <MenuSection
              id="rumAndChacha"
              title="РОМ / КАШАСА 50 мл"
              data={rumAndChacha}
            />
            <MenuSection id="gin" title="ДЖИН 50 мл" data={gin} />
            <MenuSection
              id="brandy"
              title="КОНЬЯК / БРЕДИ 50 мл"
              data={brandy}
            />
            <MenuSection
              id="calvados"
              title="АРМАНЬЯК / КАЛЬВАДОС 50 мл"
              data={calvados}
            />
            <MenuSection id="grappa" title="ГРАППА 50 мл" data={grappa} />
            <MenuSection id="pisco" title="ПИСКО 50 мл" data={pisco} />
            <MenuSection
              id="aperitif"
              title="Аперитив / Дижестив 50 мл"
              data={aperitif}
            />
            <MenuSection id="vermouth" title="ВЕРМУТ" data={vermouth} />
            <MenuSection
              id="cocktails"
              title="ANGEL / 8 COCKTAILS"
              data={cocktails}
            />

            <MenuSection id="water" title="Вода" data={water} />
            <MenuSection id="smoothies" title="СМУЗИ 300 мл" data={smoothies} />
            <MenuSection
              id="lemonades"
              title="ДОМАШНИЕ ЛИМОНАДЫ 300 мл / 1l"
              data={lemonades}
            />
            <MenuSection
              id="milkShakes"
              title="MILK SHAKES"
              data={milkShakes}
            />
            <MenuSection id="juices" title="СОКИ 'Я'" data={juices} />
            <MenuSection title="СОК СВЕЖЕВЫЖАТЫЙ 250 мл" data={juicesFresh} />
            <MenuSection id="beer" title="ПИВО" data={beer} />
            <MenuSection
              id="hotAlco"
              title="ГОРЯЧИЕ НАПИТКИ 300 мл"
              data={hotAlco}
            />
            <MenuSection id="coffee" title="КОФЕ" data={coffee} />
            <MenuSection
              id="tea"
              title="ЧАЙ НА ЯГОДАХ И ФРУКТАХ 450 мл"
              data={teaFruit}
            />
            <MenuSection title="ЧАЙ 450 мл" data={tea} />
            <MenuSection title="ЧАЙ АЛТАЙ 450 мл" data={teaAltay} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DrinksPage
