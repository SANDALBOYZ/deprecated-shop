// @flow

/**
 * Application state management.
 */

import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

export const StateContext = createContext()

const initialState = reducer()

export const StateProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  )
}
