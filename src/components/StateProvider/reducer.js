// @flow
import type BagState from './bagReducer'
import type RootState from './rootReducer'
import rootReducer from './rootReducer'
import { bagReducer } from './bagReducer'
import type Action from './types'

export type State = RootState & {
  bag: BagState
}

export const reducer = (
  state: State,
  action: Action
): State => {
  if (state) {
    const { bag, ...rootState } = state
    return {
      bag: bagReducer(bag, action),
      ...rootReducer(rootState, action)
    }
  } else {
    return {
      bag: bagReducer(),
      ...rootReducer()
    }
  }
}

export default reducer
