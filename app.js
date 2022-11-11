const express = require('express')
const app = express()
const port = 3000

//req => middleware => res

const logger = (req, res, next) => {
    
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    res.send('Testing')
}

app.get('/', logger,(req, res) => {
 
  res.send("Home") 
})

app.get('/about', (req, res) => res.send('About page'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
