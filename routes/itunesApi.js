const router = require('express').Router()
const iStoreRequest = require('../controller/itunesRequests')
const { body } = require('express-validator')


router.post(
  '/',
  body('userInput').whitelist( 'abcdefghijklmnnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
  async (req, res) => {
    // filter all false undefined or null entries out of input before request is made.
    
    let body = req.body.searchSelection
    const filterTrue = () => {
      let filteredList = []
      for(const el in body){
        if (body[el] === true){
          filteredList.push(el)
        }
      }
      return filteredList
    }
    
    let search = await iStoreRequest(filterTrue(), req.body.userInput)
    res.send(search)
  }
)

module.exports = router