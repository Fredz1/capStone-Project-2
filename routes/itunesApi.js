const router = require('express').Router()
const e = require('express')
const iStoreRequest = require('../controller/itunesRequests')


router.post(
  '/',
  async (req, res) => {
    let body = req.body
    console.log(req.body)
    const filterTrue = () => {
      let filteredList = []
      for(const el in body){
        if (body[el]){
          filteredList.push(el)
        }
      }
    }

    let search = await iStoreRequest(filterTrue())
    res.send(await search.results)
  }
)

module.exports = router