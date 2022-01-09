const express = require('express')
const {urlencoded, json } = require('express')
const dotenv = require('dotenv')
const helmet = require('helmet')

// initialise
const server = express()
server.use(json())
server.use(urlencoded({extended: false}))
dotenv.config()

// Helmet
server.use(helmet())

server.use(
  '/api',
  require('./routes/itunesApi.js')
)

server.listen(
  process.env.PORT,
  () => {
    console.log(`Server listening in port:${process.env.PORT}`)
  }
)