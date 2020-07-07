import React from 'react'
import './menuPages.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import menu from '../docs/angel8_menu.pdf'

import SimpleMenuPosition from '../components/SimpleMenuPosition/SimpleMenuPosition'
import ComplexMenuPosition from '../components/ComplexMenuPosition/ComplexMenuPosition'
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

class DrinksPage extends React.Component {
  scrollTo = element => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 100,
    })
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <SEO title="Меню Напитки" />
        <Layout>
          <div className="wrapper">
            <div className="menu-page">
              <div className="menu-page__wrapper">
                <h1>Напитки</h1>
                <a href={menu} download>
                  Скачать меню PDF
                </a>
                <br />
                <span className="menu-page__submenu-title">БЫСТРЫЙ ПОИСК</span>
                <div className="menu-page__submenu">
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(
                        document.getElementById('whiteWinesBottles')
                      )
                    }
                  >
                    Вина Белые по бутылкам
                  </span>

                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('redWinesBottles'))
                    }
                  >
                    Вина Красные по бутылкам
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('champagne'))
                    }
                  >
                    шампанское и игристое
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('rose'))
                    }
                  >
                    розовые вина
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(
                        document.getElementById('whiteWinesGlasses')
                      )
                    }
                  >
                    Вина белые по бокалам 150 мл
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('redWinesGlasses'))
                    }
                  >
                    Вина красные по бокалам 150 мл
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('whiskey'))
                    }
                  >
                    Виски
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('tequila'))
                    }
                  >
                    Текила
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('portoAndJerez'))
                    }
                  >
                    Порто
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('vodka'))
                    }
                  >
                    Водка
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('rumAndChacha'))
                    }
                  >
                    Ром
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('gin'))
                    }
                  >
                    Джин
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('brandy'))
                    }
                  >
                    Коньяк/Бренди
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('calvados'))
                    }
                  >
                    Арманьяк/Кальвадос
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('grappa'))
                    }
                  >
                    Граппа
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('pisko'))
                    }
                  >
                    Писко
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('aperitivo'))
                    }
                  >
                    Аперитив/Дижестив
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('vermut'))
                    }
                  >
                    Вермут
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('cocktails'))
                    }
                  >
                    Коктейли
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('specialCocktails'))
                    }
                  >
                    Фирменные Коктейли
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('water'))
                    }
                  >
                    Вода
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('smoosy'))
                    }
                  >
                    Смузи
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('limonades'))
                    }
                  >
                    Лимонады
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('juices'))
                    }
                  >
                    Соки
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('beer'))
                    }
                  >
                    Пиво
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('hotAlco'))
                    }
                  >
                    Горячее
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('tea'))
                    }
                  >
                    Чай
                  </span>
                  <span
                    className="menu-page__submenu-link"
                    onClick={() =>
                      this.scrollTo(document.getElementById('coffee'))
                    }
                  >
                    Кофе
                  </span>
                </div>

                <section
                  id="whiteWinesBottles"
                  className="menu-page__section"
                  ref={section => {
                    this.whiteWinesBottles = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Вина по бутылкам белые 750 мл
                  </span>
                  {whiteWinesBottles.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="redWinesBottles"
                  className="menu-page__section"
                  ref={section => {
                    this.whiteWinesBottles = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Вина по бутылкам красные 750 мл
                  </span>
                  {redWinesBottles.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="champagne"
                  className="menu-page__section"
                  ref={section => {
                    this.champagne = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Шампанское и игристое 150/750 мл
                  </span>
                  {champagne.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="rose"
                  className="menu-page__section"
                  ref={section => {
                    this.rose = section
                  }}
                >
                  <span className="menu-page__section-title">Вина розовые</span>
                  {rose.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="whiteWinesGlasses"
                  className="menu-page__section"
                  ref={section => {
                    this.whiteWinesGlasses = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Вина белые по бокалам 150 мл
                  </span>
                  {whiteWinesGlasses.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="redWinesGlasses"
                  className="menu-page__section"
                  ref={section => {
                    this.redWinesGlasses = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Вина красные по бокалам 150 мл
                  </span>
                  {redWinesGlasses.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="whiskey"
                  className="menu-page__section"
                  ref={section => {
                    this.whiskey = section
                  }}
                >
                  <span className="menu-page__section-title">ВИСКИ 50 мл</span>
                  <br />
                  <span className="menu-page__section-subtitle">
                    Scotch Whiskey Blend
                  </span>
                  {scotchWhiskeyBlend.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    Single Malt
                  </span>
                  {singleMalt.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    Irish Whiskey
                  </span>
                  {irishWhiskey.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    American Whiskey
                  </span>
                  {americanWhiskey.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    Japanese Whiskey
                  </span>
                  {japanWhiskey.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="tequila"
                  className="menu-page__section"
                  ref={section => {
                    this.tequila = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ТЕКИЛА / MEСКАЛЬ 50 мл
                  </span>
                  {tequilaAndMezkal.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="portoAndJerez"
                  className="menu-page__section"
                  ref={section => {
                    this.portoAndJerez = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ПОРТО / ШЕРРИ 75 мл
                  </span>
                  {portoAndJerez.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="vodka"
                  className="menu-page__section"
                  ref={section => {
                    this.vodka = section
                  }}
                >
                  <span className="menu-page__section-title">ВОДКА 50 мл</span>
                  {vodka.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="rumAndChacha"
                  className="menu-page__section"
                  ref={section => {
                    this.rumAndChacha = section
                  }}
                >
                  <span className="menu-page__section-title">
                    РОМ / ЧАЧА 50 мл
                  </span>
                  {rumAndChacha.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="gin"
                  className="menu-page__section"
                  ref={section => {
                    this.gin = section
                  }}
                >
                  <span className="menu-page__section-title">ДЖИН 50 мл</span>
                  {gin.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="brandy"
                  className="menu-page__section"
                  ref={section => {
                    this.brandy = section
                  }}
                >
                  <span className="menu-page__section-title">
                    КОНЬЯК / БРЕДИ 50 мл
                  </span>
                  {brandy.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="calvados"
                  className="menu-page__section"
                  ref={section => {
                    this.calvados = section
                  }}
                >
                  <span className="menu-page__section-title">
                    АРМАНЬЯК / КАЛЬВАДОС 50 мл
                  </span>
                  {calvados.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="grappa"
                  className="menu-page__section"
                  ref={section => {
                    this.grappa = section
                  }}
                >
                  <span className="menu-page__section-title">ГРАППА 50 мл</span>
                  {grappa.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="pisko"
                  className="menu-page__section"
                  ref={section => {
                    this.pisko = section
                  }}
                >
                  <span className="menu-page__section-title">ПИСКО 50 мл</span>
                  {pisco.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="aperitivo"
                  className="menu-page__section"
                  ref={section => {
                    this.aperitivo = section
                  }}
                >
                  <span className="menu-page__section-title">
                    АПЕРИТИВ / DIGESTIV 50 мл
                  </span>
                  {aperitivo.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="vermut"
                  className="menu-page__section"
                  ref={section => {
                    this.vermut = section
                  }}
                >
                  <span className="menu-page__section-title">ВЕРМУТ</span>
                  {vermut.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="cocktails"
                  className="menu-page__section"
                  ref={section => {
                    this.cocktails = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ANGEL / 8 COCKTAILS
                  </span>
                  {cocktails.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="specialCocktails"
                  className="menu-page__section"
                  ref={section => {
                    this.specialCocktails = section
                  }}
                >
                  <span className="menu-page__section-title">
                    FORGOTTEN COCKTAIL RECIPES
                  </span>
                  {specialCocktails.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="water"
                  className="menu-page__section"
                  ref={section => {
                    this.water = section
                  }}
                >
                  <span className="menu-page__section-title">Вода</span>
                  {water.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="smoosy"
                  className="menu-page__section"
                  ref={section => {
                    this.smoosy = section
                  }}
                >
                  <span className="menu-page__section-title">СМУЗИ 300 мл</span>
                  {smoosy.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="limonades"
                  className="menu-page__section"
                  ref={section => {
                    this.limonades = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ДОМАШНИЕ ЛИМОНАДЫ 300 мл / 1l
                  </span>
                  {limonades.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="juices"
                  className="menu-page__section"
                  ref={section => {
                    this.juicesYa = section
                  }}
                >
                  <span className="menu-page__section-title">СОКИ "Я"</span>
                  {juicesYa.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  className="menu-page__section"
                  ref={section => {
                    this.freshJuices = section
                  }}
                >
                  <span className="menu-page__section-title">
                    СОК СВЕЖЕВЫЖАТЫЙ 250 мл
                  </span>
                  {freshJuices.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="beer"
                  className="menu-page__section"
                  ref={section => {
                    this.beer = section
                  }}
                >
                  <span className="menu-page__section-title">ПИВО</span>
                  <br />

                  <span className="menu-page__section-subtitle">
                    бутылочное
                  </span>
                  {bottleBeer.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="hotAlco"
                  className="menu-page__section"
                  ref={section => {
                    this.hotAlco = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ГОРЯЧИЕ НАПИТКИ 300 мл
                  </span>
                  {hotAlco.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="coffee"
                  className="menu-page__section"
                  ref={section => {
                    this.coffee = section
                  }}
                >
                  <span className="menu-page__section-title">КОФЕ</span>
                  {coffee.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  {coffeWithEngredients.map(position => (
                    <ComplexMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  className="menu-page__section--last"
                  ref={section => {
                    this.tea = section
                  }}
                >
                  <span className="menu-page__section-title" id="tea">
                    ЧАЙ НА ЯГОДАХ И ФРУКТАХ 450 мл
                  </span>
                  {fruitTea.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-title">ЧАЙ 450 мл</span>
                  {simpleTea.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-title">
                    ЧАЙ АЛТАЙ 450 мл
                  </span>
                  {altayTea.map(position => (
                    <SimpleMenuPosition
                      key={position.name}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default DrinksPage
