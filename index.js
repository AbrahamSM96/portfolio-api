require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const logger = require('./loggerMiddleware')
const notFound = require('./middleware/notFound.js')
const handleErrors = require('./middleware/handleErrors.js')
const portfolioRouter = require('./controllers/data')

app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/api/data', portfolioRouter)

// Los middlewares se usan al ultimo ya que darian error de no encontrar las endpoints
app.use(notFound)
app.use(handleErrors)

// server
const PORT = process.env.PORT || 3001

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
