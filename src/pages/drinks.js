import React from 'react'
import './menuPages.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import menuPDF from '../docs/angel8_menu.pdf'
import Submenu from '../components/Submenu/Submenu'
import MenuSection from '../components/MenuSection/MenuSection'
import {
  scotchWhiskeyBlend,
  singleMalt,
  irishWhiskey,
  americanWhiskey,
  japanWhiskey,
  tequilaAndMezkal,
  portoAndJerez,
  vodka,
  rumAndChacha,
  gin,
  brandy,
  calvados,
  grappa,
  pisco,
  aperitivo,
  vermut,
  cocktails,
  specialCocktails,
  water,
  smoosy,
  limonades,
  juicesYa,
  freshJuices,
  bottleBeer,
  hotAlco,
  coffee,
  coffeWithEngredients,
  fruitTea,
  simpleTea,
  altayTea,
  whiteWinesBottles,
  redWinesBottles,
  champagne,
  rose,
  whiteWinesGlasses,
  redWinesGlasses,
} from '../data/menu.js'

let linksData = [
  {
    id: 'whiteWinesBottles',
    name: 'Вина Белые по бутылкам',
  },
  {
    id: 'redWinesBottles',
    name: 'Вина Красные по бутылкам',
  },
  {
    id: 'champagne',
    name: 'шампанское и игристое',
  },
  {
    id: 'rose',
    name: 'розовые вина',
  },
  {
    id: 'whiteWinesGlasses',
    name: 'Вина белые по бокалам 150 мл',
  },
  {
    id: 'redWinesGlasses',
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
    id: 'aperitivo',
    name: 'Аперитив/Дижестив',
  },
  {
    id: 'vermut',
    name: 'Вермут',
  },
  {
    id: 'cocktails',
    name: 'Коктейли',
  },
  {
    id: 'specialCocktails',
    name: 'FORGOTTEN COCKTAIL RECIPES',
  },
  {
    id: 'water',
    name: 'Вода',
  },
  {
    id: 'smoosy',
    name: 'Смузи',
  },
  {
    id: 'limonades',
    name: 'Лимонады',
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
              id="whiteWinesBottles"
              title="Вина по бутылкам белые 750 мл"
              data={whiteWinesBottles}
            />
            <MenuSection
              id="redWinesBottles"
              title="Вина по бутылкам красные 750 мл"
              data={redWinesBottles}
            />
            <MenuSection
              id="champagne"
              title="Шампанское и игристое 150/750 мл"
              data={champagne}
            />
            <MenuSection id="rose" title="Вина розовые" data={rose} />
            <MenuSection
              id="whiteWinesGlasses"
              title="Вина белые по бокалам 150 мл"
              data={whiteWinesGlasses}
            />
            <MenuSection
              id="redWinesGlasses"
              title="Вина красные по бокалам 150 мл"
              data={redWinesGlasses}
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
              title="РОМ / ЧАЧА 50 мл"
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
              id="aperitivo"
              title="Аперитив / Дижестив 50 мл"
              data={aperitivo}
            />
            <MenuSection id="vermut" title="ВЕРМУТ" data={vermut} />
            <MenuSection
              id="cocktails"
              title="ANGEL / 8 COCKTAILS"
              data={cocktails}
            />
            <MenuSection
              id="specialCocktails"
              title="FORGOTTEN COCKTAIL RECIPES"
              data={specialCocktails}
            />
            <MenuSection id="water" title="Вода" data={water} />
            <MenuSection id="smoosy" title="СМУЗИ 300 мл" data={smoosy} />
            <MenuSection
              id="limonades"
              title="ДОМАШНИЕ ЛИМОНАДЫ 300 мл / 1l"
              data={limonades}
            />
            <MenuSection id="juices" title="СОКИ 'Я'" data={juicesYa} />
            <MenuSection title="СОК СВЕЖЕВЫЖАТЫЙ 250 мл" data={freshJuices} />
            <MenuSection id="beer" title="ПИВО" data={bottleBeer} />
            <MenuSection
              id="hotAlco"
              title="ГОРЯЧИЕ НАПИТКИ 300 мл"
              data={hotAlco}
            />
            <MenuSection id="coffee" title="КОФЕ" data={coffee} />
            <MenuSection title="КОФЕ С ДОБАВКАМИ" data={coffeWithEngredients} />
            <MenuSection
              id="tea"
              title="ЧАЙ НА ЯГОДАХ И ФРУКТАХ 450 мл"
              data={fruitTea}
            />
            <MenuSection title="ЧАЙ 450 мл" data={simpleTea} />
            <MenuSection title="ЧАЙ АЛТАЙ 450 мл" data={altayTea} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DrinksPage
