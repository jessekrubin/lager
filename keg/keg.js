const express = require('express')
const bodyParser = require('body-parser')
const jsse = require('jsse')
const cors = require('cors')

// server app
const app = express()

// cors because you need it (cors is a nightmare and is never not confusing)
app.use(cors())

// need the limit thing because attachments are sent as base64 strings
app.use(bodyParser())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.post('/log', async (req, res) => {
    try {
        console.log(req.body)
        res.sendStatus(200)
    } catch (e) {
        console.log('HERM something went wrong', e)
    }
})
app.post('/', async (req, res) => {
    try {
        console.log(req.body)
        res.sendStatus(200)
    } catch (e) {
        console.log('HERM something went wrong', e)
    }
})

const main = async () => {
    // mkdir for the data!
    await jsse.mkdir('data', true) // the true is 'exist_ok'
    // start server where we send data!
    app.listen(8080, () => console.log(`Started server at http://localhost:8080!`))
}
main()

