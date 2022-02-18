const express = require('express')
const { json } = require('express')
const dotenv = require('dotenv')

// initialise
const server = express()
server.use(json())
dotenv.config()



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
  process.env.PORT || 5000,
  () => {
    console.log(`Server listening in port:${process.env.PORT}`)
  }
)