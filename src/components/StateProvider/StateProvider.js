// @flow

/**
 * Application state management.
 */

import React, { createContext, useReducer } from 'react'
import { bagReducer } from './bagReducer'
import { TOGGLE_BAG, TOGGLE_MENU } from './actions'

type State = {
  bagIsOpen: boolean,
  menuIsOpen: boolean
}

export const StateContext = createContext()

const rootReducer = (state: State, action): State => {
  switch (action.type) {
    case TOGGLE_BAG:
      return {
        ...state,
        bagIsOpen: !state.bagIsOpen
      }
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen
      }
    default:
      return state
  }
}

const reducer = (state: State, action): State => ({
  ...rootReducer(state, action),
  bag: bagReducer(state, action)
})

const initialState: State = {
  bagIsOpen: false,
  menuIsOpen: false
}

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
