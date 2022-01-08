const express = require('express')
const {urlencoded, json } = require('express')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

// initialise
const server = express()
server.use(json())
server.use(urlencoded({extended: false}))
dotenv.config()

server.use(morgan('dev'))

// Helmet
server.use(helmet.contentSecurityPolicy());
server.use(helmet.crossOriginEmbedderPolicy());
server.use(helmet.crossOriginOpenerPolicy());
server.use(helmet.crossOriginResourcePolicy());
server.use(helmet.dnsPrefetchControl());
server.use(helmet.expectCt());
server.use(helmet.frameguard());
server.use(helmet.hidePoweredBy());
server.use(helmet.hsts());
server.use(helmet.ieNoOpen());
server.use(helmet.noSniff());
server.use(helmet.originAgentCluster());
server.use(helmet.permittedCrossDomainPolicies());
server.use(helmet.referrerPolicy());
server.use(helmet.xssFilter());




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