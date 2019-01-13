import React from 'react'
import AOS from 'aos'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import NavPannel from './NavPannel/NavPannel'
import NavButton from './NavButton/NavButton'
import Grid from './Grid/Grid'

import './layout.scss'

class Layout extends React.Component {
  state = {
    navIsOpen: false,
  }
  componentDidMount() {
    AOS.init()
  }
  handleClick = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen })
  }
  render() {
    return (
      <div className="main-wrapper">
        <Grid />
        <NavPannel show={this.state.navIsOpen} handleClick={this.handleClick} />
        <NavButton
          clickHandler={this.handleClick}
          icon={this.state.navIsOpen}
        />
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
