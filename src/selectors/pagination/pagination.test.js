import { fromJS } from 'immutable'

import { selectPage } from '.'

test('selectPage', () => {
  const state = {
    pagination: fromJS({
      SOME_TYPE: {
        '-15128758': {
          count: 6,
          prev: '',
          next: '',
          results: ['1', '2', '3', '4', '5', '6'],
        },
        '-159413994': {
          count: 6,
          prev: '',
          next: '',
          results: ['7', '8', '9', '10', '11', '12'],
        },
        '-732274808': {
          count: 3,
          prev: '',
          next: '',
          results: ['13', '14', '15'],
        },
      },
    }),
    someReducer: fromJS({
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
      4: { id: 4 },
      5: { id: 5 },
      6: { id: 6 },
      7: { id: 7 },
      8: { id: 8 },
      9: { id: 9 },
      10: { id: 10 },
      11: { id: 11 },
      12: { id: 12 },
      13: { id: 13 },
      14: { id: 14 },
      15: { id: 15 },
    }),
  }
  expect(selectPage(state, 'SOME_TYPE', {}).toJS()).toEqual({
    count: 6,
    next: '',
    prev: '',
    results: ['1', '2', '3', '4', '5', '6'],
  })

  expect(selectPage(state, 'SOME_TYPE', { page: 2 }).toJS()).toEqual({
    count: 6,
    next: '',
    prev: '',
    results: ['7', '8', '9', '10', '11', '12'],
  })
  expect(selectPage(state, 'SOME_TYPE', { page: 2, someFilteR: true }).toJS()).toEqual({
    count: 3,
    next: '',
    prev: '',
    results: ['13', '14', '15'],
  })
})
