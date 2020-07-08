import React, { useReducer } from 'react'
import NavContext from './navContext'
import navReducer from './navReducer'
import { openMenu, closeMenu } from '../../animations/navigation'
import { OPEN_NAV, CLOSE_NAV } from '../types'

const NavState = props => {
  const initialState = {
    navIsOpened: false,
  }

  const [state, dispatch] = useReducer(navReducer, initialState)

  // open nav
  function openNav() {
    openMenu()
    dispatch({ type: OPEN_NAV, payload: true })
  }

  // close nav
  function closeNav() {
    closeMenu()
    dispatch({ type: CLOSE_NAV, payload: false })
  }

  return (
    <NavContext.Provider
      value={{ navIsOpened: state.navIsOpened, openNav, closeNav }}
    >
      {props.children}
    </NavContext.Provider>
  )
}

export default NavState
