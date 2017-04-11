import getStatus from './get-status'

test('getStatus', () => {
  expect(getStatus(true, {})).toBe(500)
  expect(getStatus(false, { routes: [{ path: '*' }] })).toBe(404)
  expect(getStatus(false, { routes: [] })).toBe(200)
})
