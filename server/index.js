const app = require('express')()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')

const connect = require('./src/db/connect')
connect()

app.use(bodyParser.json())
app.use(cors())
const registerRouter = require('./src/routes/registerRouter');

app.use(registerRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})