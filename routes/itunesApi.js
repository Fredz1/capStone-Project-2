const router = require('express').Router()
const iStoreRequest = require('../controller/itunesRequests')


router.post(
  '/',
  async (req, res) => {
    let search = await iStoreRequest('eminem')
    res.send(await search.results)
  }
)

module.exports = router