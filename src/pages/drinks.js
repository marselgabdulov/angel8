import React from 'react'
import './menuPages.css'
import scrollToComponent from 'react-scroll-to-component'
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
} from '../data/menu.js'

class DrinksPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const scrollSettings = {
      offset: 0,
      align: 'top',
      duration: 500,
      ease: 'inExpo',
    }
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
                      scrollToComponent(this.whiskey, scrollSettings)
                    }
                  >
                    Виски
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.tequila, scrollSettings)
                    }
                  >
                    Текила
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.portoAndJerez, scrollSettings)
                    }
                  >
                    Порто
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.vodka, scrollSettings)
                    }
                  >
                    Водка
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.rumAndChacha, scrollSettings)
                    }
                  >
                    Ром
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() => scrollToComponent(this.gin, scrollSettings)}
                  >
                    Джин
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.brandy, scrollSettings)
                    }
                  >
                    Коньяк/Бренди
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.calvados, scrollSettings)
                    }
                  >
                    Арманьяк/Кальвадос
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.grappa, scrollSettings)
                    }
                  >
                    Граппа
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.pisko, scrollSettings)
                    }
                  >
                    Писко
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.aperitivo, scrollSettings)
                    }
                  >
                    Аперитив/Digestiv
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.vermut, scrollSettings)
                    }
                  >
                    Вермут
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.cocktails, scrollSettings)
                    }
                  >
                    Коктейли
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.water, scrollSettings)
                    }
                  >
                    Вода
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.smoosy, scrollSettings)
                    }
                  >
                    Смузи
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.limonades, scrollSettings)
                    }
                  >
                    Лимонады
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.juicesYa, scrollSettings)
                    }
                  >
                    Соки
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() => scrollToComponent(this.beer, scrollSettings)}
                  >
                    Пиво
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.hotAlco, scrollSettings)
                    }
                  >
                    Горячее
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() => scrollToComponent(this.tea, scrollSettings)}
                  >
                    Чай
                  </button>
                  <button
                    className="menu-page__submenu-button"
                    onClick={() =>
                      scrollToComponent(this.coffee, scrollSettings)
                    }
                  >
                    Кофе
                  </button>
                </div>
                <section
                  className="whiskey"
                  ref={section => {
                    this.whiskey = section
                  }}
                >
                  <span className="menu-page__section-title">ВИСКИ 50ml</span>
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
                  className="tequila"
                  ref={section => {
                    this.tequila = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ТЕКИЛА / MEСКАЛЬ 50ml
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
                  className="portoAndJerez"
                  ref={section => {
                    this.portoAndJerez = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ПОРТО / ШЕРРИ 75ml
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
                  className="vodka"
                  ref={section => {
                    this.vodka = section
                  }}
                >
                  <span className="menu-page__section-title">ВОДКА 50ml</span>
                  {vodka.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  className="rumAndChacha"
                  ref={section => {
                    this.rumAndChacha = section
                  }}
                >
                  <span className="menu-page__section-title">
                    РОМ / ЧАЧА 50ml
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
                  className="gin"
                  ref={section => {
                    this.gin = section
                  }}
                >
                  <span className="menu-page__section-title">ДЖИН 50ml</span>
                  {gin.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  className="brandy"
                  ref={section => {
                    this.brandy = section
                  }}
                >
                  <span className="menu-page__section-title">
                    КОНЬЯК / БРЕДИ 50ml
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
                  className="calvados"
                  ref={section => {
                    this.calvados = section
                  }}
                >
                  <span className="menu-page__section-title">
                    АРМАНЬЯК / КАЛЬВАДОС 50ml
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
                  className="grappa"
                  ref={section => {
                    this.grappa = section
                  }}
                >
                  <span className="menu-page__section-title">ГРАППА 50ml</span>
                  {grappa.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  className="pisco"
                  ref={section => {
                    this.pisko = section
                  }}
                >
                  <span className="menu-page__section-title">ПИСКО 50ml</span>
                  {pisco.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                </section>
                <section
                  className="aperitivo"
                  ref={section => {
                    this.aperitivo = section
                  }}
                >
                  <span className="menu-page__section-title">
                    АПЕРИТИВ / DIGESTIV 50ml
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
                      ingredients={position.ingredients}
                    />
                  ))}
                </section>
                <section
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
                  className="smoosy"
                  ref={section => {
                    this.smoosy = section
                  }}
                >
                  <span className="menu-page__section-title">СМУЗИ 300ml</span>
                  {smoosy.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      ingredients={position.ingredients}
                    />
                  ))}
                </section>
                <section
                  className="limonades"
                  ref={section => {
                    this.limonades = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ДОМАШНИЕ ЛИМОНАДЫ 300ml / 1l
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
                    СОК СВЕЖЕВЫЖАТЫЙ 250ml
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
                  className="hotAlco"
                  ref={section => {
                    this.hotAlco = section
                  }}
                >
                  <span className="menu-page__section-title">
                    ГОРЯЧИЕ НАПИТКИ 300ml
                  </span>
                  {hotAlco.map(position => (
                    <ComplexMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                      ingredients={position.ingredients}
                    />
                  ))}
                </section>
                <section
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
                      ingredients={position.ingredients}
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
                    ЧАЙ НА ЯГОДАХ И ФРУКТАХ 450ml
                  </span>
                  {fruitTea.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-title">ЧАЙ 450ml</span>
                  {simpleTea.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
                  <span className="menu-page__section-title">
                    ЧАЙ АЛТАЙ 450ml
                  </span>
                  {altayTea.map(position => (
                    <SimpleMenuPosition
                      key={position.id}
                      name={position.name}
                      price={position.price}
                    />
                  ))}
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
