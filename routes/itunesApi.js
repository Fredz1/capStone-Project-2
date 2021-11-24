const router = require('express').Router()
const iStoreRequest = require('../controller/itunesRequests')


router.get(
  '/',
  (req, res) => {
    res.sendStatus(200)
  }
)

module.exports = router