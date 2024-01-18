require('dotenv').config()

const express = require('express')
const cors = require('cors')

const screener = require('./screener')
const routes = require('./routes')

const app = express()
app.use(cors())

app.use('/api/v1', routes)


const {APP_PORT, APP_IP} = process.env

const start = async () => {
    await Promise.all([
        await screener.okxFutures.start(),
        await screener.okxSpot.start()
    ])

    app.listen(APP_PORT, APP_IP, () => {
        console.log('server started...')
    })
}


start()
