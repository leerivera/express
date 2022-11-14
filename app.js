
const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

const port = 5000

//static assests

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)





app.listen(port, () => console.log(`Example app listening on port ${port}!`))
