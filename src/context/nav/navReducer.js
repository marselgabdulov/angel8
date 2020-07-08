import { OPEN_NAV, CLOSE_NAV } from '../types'

export default (state, action) => {
  switch (action.type) {
    case OPEN_NAV:
    case CLOSE_NAV:
      return {
        navIsOpened: action.payload,
      }
    default:
      return state
  }
}
