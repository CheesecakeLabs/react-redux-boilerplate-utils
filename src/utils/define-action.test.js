import defineAction from './define-action'

test('defineAction', () => {
  expect(defineAction('SOME_ACTION').ACTION).toBe('SOME_ACTION')
  expect(defineAction('SOME_ACTION').FULFILLED).toBe('SOME_ACTION_FULFILLED')
  expect(defineAction('SOME_ACTION').PENDING).toBe('SOME_ACTION_PENDING')
  expect(defineAction('SOME_ACTION').REJECTED).toBe('SOME_ACTION_REJECTED')

  expect(defineAction('SOME_ACTION', ['DONE', 'LOADING', 'ERROR']).ACTION).toBe('SOME_ACTION')
  expect(defineAction('SOME_ACTION', ['DONE', 'LOADING', 'ERROR']).DONE).toBe('SOME_ACTION_DONE')
  expect(defineAction('SOME_ACTION', ['DONE', 'LOADING', 'ERROR']).LOADING).toBe('SOME_ACTION_LOADING')
  expect(defineAction('SOME_ACTION', ['DONE', 'LOADING', 'ERROR']).ERROR).toBe('SOME_ACTION_ERROR')
})
