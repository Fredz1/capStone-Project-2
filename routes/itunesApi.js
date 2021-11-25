const router = require('express').Router()
const iStoreRequest = require('../controller/itunesRequests')


router.post(
  '/',
  async (req, res) => {
    let search = await iStoreRequest('Fred')
    res.send(await search)
  }
)

module.exports = router