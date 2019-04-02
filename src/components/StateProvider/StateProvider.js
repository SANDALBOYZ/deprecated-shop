// @flow

/**
 * Application state management.
 */

import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import type State from './reducer'

export const StateContext = createContext()

const initialState: State = {
  bagIsOpen: false,
  menuIsOpen: false,
  bag: {}
}

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
