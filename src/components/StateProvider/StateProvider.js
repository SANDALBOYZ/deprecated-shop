// @flow
import React, { createContext, useReducer } from 'react'

type State = {
  bagIsOpen: boolean,
  menuIsOpen: boolean
}

export const StateContext = createContext()

const reducer = (state: State, action): State => {
  switch (action.type) {
    case 'toggleBag':
      return {
        ...state,
        bagIsOpen: !state.bagIsOpen
      }
    case 'toggleMenu':
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen
      }
    default:
      return state
  }
}

const initialState: State = {
  bagIsOpen: false,
  menuIsOpen: false
}

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
