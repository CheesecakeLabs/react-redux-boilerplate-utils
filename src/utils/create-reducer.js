export default (initialState, handlers) => (state = initialState, action) => {
  const reduceFn = handlers[action.type]
  return reduceFn ? reduceFn(state, action) : state
}
