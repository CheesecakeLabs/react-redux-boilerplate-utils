import getActionName from './get-action-name'

test('getActionName', () => {
  const BASE_ACTION_NAME = 'SOME_MOTEREFFING'
  expect(getActionName('SOME_MOTEREFFING_PENDING')).toBe(BASE_ACTION_NAME)
  expect(getActionName('SOME_MOTEREFFING_REJECTED')).toBe(BASE_ACTION_NAME)
  expect(getActionName('SOME_MOTEREFFING_FULFILLED')).toBe(BASE_ACTION_NAME)
  expect(getActionName('NOT_A_MATCH')).toBe('NOT_A_MATCH')
  expect(getActionName('SOME_PENDING_ACTION_PENDING')).toBe('SOME_PENDING_ACTION')
  expect(getActionName('SOME_PENDING_PENDING')).toBe('SOME_PENDING')
  expect(getActionName('REJECT_SOMETHING_PENDING')).toBe('REJECT_SOMETHING')
  expect(getActionName('SOME_PENDING')).toBe('SOME')
})
