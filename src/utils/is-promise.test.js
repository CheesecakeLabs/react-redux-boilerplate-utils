import isPromise from './is-promise'

test('isPromise', () => {
  const somePromise = new Promise(Function.prototype)
  expect(isPromise(somePromise)).toBe(true)
  expect(isPromise(() => 'just a regular fn')).toBe(false)
  expect(isPromise({ an: 'object' })).toBe(false)
  expect(isPromise(10)).toBe(false)
  expect(isPromise('string')).toBe(false)
  expect(isPromise(undefined)).toBe(false)
  expect(isPromise(NaN)).toBe(false)
})
