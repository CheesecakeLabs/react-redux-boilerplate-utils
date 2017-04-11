export default (err, props) => {
  if (err) {
    return 500
  }

  const isNotFound = props.routes.find((route) => route.path === '*')
  if (props && !isNotFound) {
    return 200
  }

  return 404
}
