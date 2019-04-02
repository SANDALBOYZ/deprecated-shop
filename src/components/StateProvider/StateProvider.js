// @flow

/**
 * Application state management.
 */

import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

export const StateContext = createContext()

const initialState = reducer()

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
