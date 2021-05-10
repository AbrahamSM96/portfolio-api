const ERROR_HANDLERS = {
  defaultError: (response, error) => {
    console.error(error.name)
    response.status(500).end()
  }
}

module.exports = (error, request, response, next) => {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
  handler(response.error)
}
