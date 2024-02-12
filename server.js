const express = require('express')
const routes = require('./routes/routes.js')

const app = express()

app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/', routes.router)


app.listen(3000, () => {
    console.log('Start server on port 3000')
})