import { Map, fromJS } from 'immutable'

import getActionName from '../../utils/get-action-name'

const INITIAL_STATE = new Map()

export default (state = INITIAL_STATE, action) => {
  if (action.error) {
    return state.set(getActionName(action.type), fromJS(action.payload))
  }
  return state.delete(getActionName(action.type))
}
