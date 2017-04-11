import errorMiddleware from './error-middleware'

test('errorMiddleware', async () => {
  const next = (a) => a
  const notPromiseAction = { not: 'apromise' }
  expect(errorMiddleware()(next)(notPromiseAction)).toEqual({ not: 'apromise' })

  const yesPromiseAction = new Promise(Function.prototype)
  expect(errorMiddleware()(next)(yesPromiseAction)).not.toBe(yesPromiseAction)
})
