import createReducer from './create-reducer'

test('createReducer', () => {
  const reducer = createReducer(0, { name: (a) => a + 1 })
  let state = reducer(0, { type: 'name' })
  state = reducer(state, { type: 'name' })
  state = reducer(state, { type: 'name' })
  state = reducer(state, { type: 'invalid' })
  expect(state).toEqual(3)

  const anotherReducer = createReducer(0, {})(0, { type: 'name' })
  expect(anotherReducer).toEqual(0)
})
