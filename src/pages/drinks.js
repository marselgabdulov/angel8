import React from 'react'
import './menuPages.css'
import Layout from '../components/layout'
import Footer from '../components/Footer/Footer'

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
  water,
  smoosy,
  limonades,
  juicesYa,
  freshJuices,
  beer,
  bottleBeer,
  hotAlco,
  coffee,
  coffeWithEngredients,
  fruitTea,
  simpleTea,
  altayTea,
  whiteWineBottles,
  redWinesBottles,
  champagne,
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
        <Layout>
          <div className="wrapper">
            <div className="menu-page">
              <div className="menu-page__wrapper">
                <span className="menu-page__submenu-title">Быстрый поиск</span>
                <div className="menu-page__submenu">
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('whiteWineBottles'))
                    }
                  >
                    Белые Вина в бутылках
                  </button>

                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('redWinesBottles'))
                    }
                  >
                    Красные Вина в бутылках
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('champagne'))
                    }
                  >
                    шампанское и игристое
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(
                        document.getElementById('whiteWinesGlasses')
                      )
                    }
                  >
                    Вина белые по бокалам 150 мл
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('redWinesGlasses'))
                    }
                  >
                    Вина красные по бокалам 150 мл
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('whiskey'))
                    }
                  >
                    Виски
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('tequila'))
                    }
                  >
                    Текила
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('portoAndJerez'))
                    }
                  >
                    Порто
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('vodka'))
                    }
                  >
                    Водка
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('rumAndChacha'))
                    }
                  >
                    Ром
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('gin'))
                    }
                  >
                    Джин
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('brandy'))
                    }
                  >
                    Коньяк/Бренди
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('calvados'))
                    }
                  >
                    Арманьяк/Кальвадос
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('grappa'))
                    }
                  >
                    Граппа
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('pisko'))
                    }
                  >
                    Писко
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('aperitivo'))
                    }
                  >
                    Аперитив/Digestiv
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('vermut'))
                    }
                  >
                    Вермут
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('cocktails'))
                    }
                  >
                    Коктейли
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('water'))
                    }
                  >
                    Вода
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('smoosy'))
                    }
                  >
                    Смузи
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('limonades'))
                    }
                  >
                    Лимонады
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('juices'))
                    }
                  >
                    Соки
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('beer'))
                    }
                  >
                    Пиво
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('hotAlco'))
                    }
                  >
                    Горячее
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('tea'))
                    }
                  >
                    Чай
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      this.scrollTo(document.getElementById('coffee'))
                    }
                  >
                    Кофе
                  </button>
                </div>
                <section
                  id="whiteWineBottles"
                  className="whiteWineBottles"
                  ref={section => {
                    this.whiteWineBottles = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Вина по бутылкам белые 750 мл
                  </span>
                  {whiteWineBottles.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="redWinesBottles"
                  className="redWinesBottles"
                  ref={section => {
                    this.whiteWineBottles = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Вина по бутылкам красные 750 мл
                  </span>
                  {redWinesBottles.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="champagne"
                  className="champagne"
                  ref={section => {
                    this.champagne = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Шампанское и игристое 150/750 мл
                  </span>
                  {champagne.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="whiteWineGlasses"
                  className="whiteWineGlasses"
                  ref={section => {
                    this.whiteWinesGlasses = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Вина белые по бокалам 150 мл
                  </span>
                  {whiteWinesGlasses.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="redWinesGlasses"
                  className="redWinesGlasses"
                  ref={section => {
                    this.redWinesGlasses = section
                  }}
                >
                  <span className="menu-page__section-title">
                    Вина красные по бокалам 150 мл
                  </span>
                  {redWinesGlasses.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="whiskey"
                  className="whiskey"
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
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    Single Malt
                  </span>
                  {singleMalt.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    Irish Whiskey
                  </span>
                  {irishWhiskey.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    American Whiskey
                  </span>
                  {americanWhiskey.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    Japanese Whiskey
                  </span>
                  {japanWhiskey.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="tequila"
                  className="tequila"
                  ref={section => {
                    this.tequila = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ТЕКИЛА / MEСКАЛЬ 50 мл
                  </span>
                  {tequilaAndMezkal.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="portoAndJerez"
                  className="portoAndJerez"
                  ref={section => {
                    this.portoAndJerez = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ПОРТО / ШЕРРИ 75 мл
                  </span>
                  {portoAndJerez.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="vodka"
                  className="vodka"
                  ref={section => {
                    this.vodka = section
                  }}
                >
                  <span className="menu-page__section-title">ВОДКА 50 мл</span>
                  {vodka.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="rumAndChacha"
                  className="rumAndChacha"
                  ref={section => {
                    this.rumAndChacha = section
                  }}
                >
                  <span className="menu-page__section-title">
                    РОМ / ЧАЧА 50 мл
                  </span>
                  {rumAndChacha.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="gin"
                  className="gin"
                  ref={section => {
                    this.gin = section
                  }}
                >
                  <span className="menu-page__section-title">ДЖИН 50 мл</span>
                  {gin.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="brandy"
                  className="brandy"
                  ref={section => {
                    this.brandy = section
                  }}
                >
                  <span className="menu-page__section-title">
                    КОНЬЯК / БРЕДИ 50 мл
                  </span>
                  {brandy.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="calvados"
                  className="calvados"
                  ref={section => {
                    this.calvados = section
                  }}
                >
                  <span className="menu-page__section-title">
                    АРМАНЬЯК / КАЛЬВАДОС 50 мл
                  </span>
                  {calvados.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="grappa"
                  className="grappa"
                  ref={section => {
                    this.grappa = section
                  }}
                >
                  <span className="menu-page__section-title">ГРАППА 50 мл</span>
                  {grappa.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="pisko"
                  className="pisco"
                  ref={section => {
                    this.pisko = section
                  }}
                >
                  <span className="menu-page__section-title">ПИСКО 50 мл</span>
                  {pisco.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="aperitivo"
                  className="aperitivo"
                  ref={section => {
                    this.aperitivo = section
                  }}
                >
                  <span className="menu-page__section-title">
                    АПЕРИТИВ / DIGESTIV 50 мл
                  </span>
                  {aperitivo.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="vermut"
                  className="vermut"
                  ref={section => {
                    this.vermut = section
                  }}
                >
                  <span className="menu-page__section-title">ВЕРМУТ</span>
                  {vermut.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="cocktails"
                  className="cocktails"
                  ref={section => {
                    this.cocktails = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ANGEL / 8 COCKTAILS
                  </span>
                  {cocktails.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="water"
                  className="water"
                  ref={section => {
                    this.water = section
                  }}
                >
                  <span className="menu-page__section-title">Вода</span>
                  {water.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="smoosy"
                  className="smoosy"
                  ref={section => {
                    this.smoosy = section
                  }}
                >
                  <span className="menu-page__section-title">СМУЗИ 300 мл</span>
                  {smoosy.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="limonades"
                  className="limonades"
                  ref={section => {
                    this.limonades = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ДОМАШНИЕ ЛИМОНАДЫ 300 мл / 1l
                  </span>
                  {limonades.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="juices"
                  className="juicesYa"
                  ref={section => {
                    this.juicesYa = section
                  }}
                >
                  <span className="menu-page__section-title">СОКИ "Я"</span>
                  {juicesYa.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  className="freshJuices"
                  ref={section => {
                    this.freshJuices = section
                  }}
                >
                  <span className="menu-page__section-title">
                    СОК СВЕЖЕВЫЖАТЫЙ 250 мл
                  </span>
                  {freshJuices.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="beer"
                  className="beer"
                  ref={section => {
                    this.beer = section
                  }}
                >
                  <span className="menu-page__section-title">ПИВО</span>
                  <br />
                  <span className="menu-page__section-subtitle">бочковое</span>
                  {beer.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-subtitle">
                    бутылочное
                  </span>
                  {bottleBeer.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  id="hotAlco"
                  className="hotAlco"
                  ref={section => {
                    this.hotAlco = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ГОРЯЧИЕ НАПИТКИ 300 мл
                  </span>
                  {hotAlco.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  id="coffee"
                  className="coffee"
                  ref={section => {
                    this.coffee = section
                  }}
                >
                  <span className="menu-page__section-title">КОФЕ</span>
                  {coffee.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  {coffeWithEngredients.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      description={position.description}
                    />
                  ))}
                </section>
                <section
                  className="tea"
                  ref={section => {
                    this.tea = section
                  }}
                >
                  <span className="menu-page__section-title" id="tea">
                    ЧАЙ НА ЯГОДАХ И ФРУКТАХ 450 мл
                  </span>
                  {fruitTea.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-title">ЧАЙ 450 мл</span>
                  {simpleTea.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-title">
                    ЧАЙ АЛТАЙ 450 мл
                  </span>
                  {altayTea.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <br />
                  <br />
                </section>
              </div>
            </div>
          </div>
        </Layout>
        <Footer />
      </>
    )
  }
}

export default DrinksPage
