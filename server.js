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

if(process.env.NODE_ENVIROMENT === 'production'){
  server.use(express.static('client/build'))
  server.get(
      '*',
      (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
      }
  )
}

server.listen(
  process.env.PORT,
  () => {
    console.log(`Server listening in port:${process.env.PORT}`)
  }
)