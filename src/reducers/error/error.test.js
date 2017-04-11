import { fromJS } from 'immutable'

import error, { INITIAL_STATE } from '.'

test('any action with error', () => {
  let newState = error(INITIAL_STATE, {
    type: 'ANY_TYPE',
    error: true,
    payload: { could: 'be', any: 'thing' },
  })
  expect(newState).toEqual(fromJS({
    ANY_TYPE: { could: 'be', any: 'thing' },
  }))

  newState = error(newState, {
    type: 'OTHER_TYPE',
    error: true,
  })
  expect(newState).toEqual(fromJS({
    ANY_TYPE: { could: 'be', any: 'thing' },
    OTHER_TYPE: undefined,
  }))

  newState = error(newState, {
    type: 'ANY_TYPE',
    error: false,
    payload: { could: 'be', any: 'thing' },
  })
  expect(newState).toEqual(fromJS({
    OTHER_TYPE: undefined,
  }))

  newState = error(newState, {
    type: 'OTHER_TYPE',
    error: false,
  })
  expect(newState).toEqual(INITIAL_STATE)
})
