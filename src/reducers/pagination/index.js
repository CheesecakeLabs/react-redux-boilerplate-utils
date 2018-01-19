import { Map, fromJS } from 'immutable'

import getActionName from '../../utils/get-action-name'
import getHashCodeFromObject from '../../utils/get-hash-code-from-object'

const pagination = (state = new Map(), { payload, type, meta = {} }) => {
  if (meta.page && payload) {
    return state.mergeDeep({
      [getActionName(type)]: {
        [getHashCodeFromObject(meta.page)]: fromJS({
          results: payload.results.map((r) => r.id && String(r.id)).filter(Boolean),
          count: payload.count,
          prev: payload.next,
          next: payload.prev,
        }),
      },
    })
  }

  return state
}

export default pagination
