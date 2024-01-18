const express = require('express')
const router = express.Router()
const screener = require('./screener')

router.get('/okx-futures-tickers', async (req, res) => {
    res.json(screener.okxFutures.getScreenerData())
})

router.get('/okx-spot-tickers', async (req, res) => {
    res.json(screener.okxSpot.getScreenerData())
})


module.exports = router
