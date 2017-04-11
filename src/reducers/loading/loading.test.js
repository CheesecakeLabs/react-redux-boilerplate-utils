import { fromJS } from 'immutable'

import loading, { INITIAL_STATE } from '.'

test('loading reducer', () => {
  let newState = loading(INITIAL_STATE, {
    type: 'ANY_TYPE_PENDING',
  })
  expect(newState).toEqual(fromJS({
    ANY_TYPE_COUNT: 1,
    ANY_TYPE: true,
  }))

  newState = loading(newState, {
    type: 'ANY_TYPE_PENDING',
  })
  expect(newState).toEqual(fromJS({
    ANY_TYPE_COUNT: 2,
    ANY_TYPE: true,
  }))

  newState = loading(newState, {
    type: 'ANY_TYPE_FULFILLED',
  })
  expect(newState).toEqual(fromJS({
    ANY_TYPE_COUNT: 1,
    ANY_TYPE: true,
  }))

  newState = loading(newState, {
    type: 'OTHER_TYPE_PENDING',
  })
  expect(newState).toEqual(fromJS({
    ANY_TYPE_COUNT: 1,
    ANY_TYPE: true,
    OTHER_TYPE_COUNT: 1,
    OTHER_TYPE: true,
  }))

  newState = loading(newState, {
    type: 'OTHER_TYPE_FULFILLED',
  })

  newState = loading(newState, {
    type: 'ANY_TYPE_REJECTED',
  })
  expect(newState).toEqual(fromJS({
    ANY_TYPE_COUNT: 0,
    ANY_TYPE: false,
    OTHER_TYPE_COUNT: 0,
    OTHER_TYPE: false,
  }))
})
