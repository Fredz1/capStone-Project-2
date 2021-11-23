const express = require('express')
const dotenv = require('dotenv')


// initialise
const server = express()
dotenv.config()


server.get(
  '/',
  (req, res) => {
    res.send('working')
  }
)


server.listen(
  process.env.PORT,
  () => {
    console.log(`Server listening in port:${process.env.PORT}`)
  }
)