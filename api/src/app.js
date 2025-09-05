const express = require('express')
const app = express()
const errorHandler = require('./middlewares/error-handler')
const userAgentMiddleware = require('./middlewares/user-agent')
const userTrackingMiddleware = require('./middlewares/user-tracking')
const exposeServiceMiddleware = require('./middlewares/expose-services')

const routes = require('./routes')

app.use(express.json({ limit: '10mb', extended: true }))
app.use(userTrackingMiddleware)
app.use(userAgentMiddleware)
app.use(...Object.values(exposeServiceMiddleware))

app.use('/api', routes)
app.use(errorHandler)

module.exports = app
