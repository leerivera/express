const express = require('express')
const app = express()
const port = 3000
const logger =require('./logger')
const authorize = require('./authorize')

app.use([authorize, logger])
//if no route is chosen the middleware will be applied everywhere

//req => middleware => res


app.get('/',(req, res) => {
 
  res.send("Home") 
})

app.get('/about',  (req, res) => res.send('About page'))

app.get('/api/products', (req, res) => {
 
    res.send("products") 
  })

  app.get('/api/items', (req, res) => {
 
    res.send("Items") 
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
