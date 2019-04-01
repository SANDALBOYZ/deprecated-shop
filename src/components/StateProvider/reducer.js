// @flow
import type BagState from './bagReducer'
import type RootState from './rootReducer'

import rootReducer from './rootReducer'
import { bagReducer } from './bagReducer'

export type State = RootState & {
  bag: BagState
}

export const reducer = (
  { bag: bagState, ...state }: State,
  action
): State => ({
  bag: bagReducer(bagState, action),
  ...rootReducer(state, action)
})

export default reducer
