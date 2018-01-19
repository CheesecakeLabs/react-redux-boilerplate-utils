import getHashCodeFromObject from './get-hash-code-from-object'

test('getHashCodeFromObject', () => {
  expect(getHashCodeFromObject({})).toBe('-15128758')
})
