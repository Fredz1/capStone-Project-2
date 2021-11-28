const router = require('express').Router()
const e = require('express')
const iStoreRequest = require('../controller/itunesRequests')


router.post(
  '/',
  async (req, res) => {
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
    res.send(await search.results)
  }
)

module.exports = router