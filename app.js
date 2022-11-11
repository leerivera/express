const { application } = require('express')
const express = require('express')
const app = express()
const {products} = require('./data')
const port = 3000

app.get('/', (req, res) => {
    res.json('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((products)=>{
        const {id, name, image} = products
        return {id,name, image}
    })
    res.json(newProducts)
})

app.get('api/products/:productID', (req, res)=> {
    const { productID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))
    console.log(singleProduct)
    res.json(singleProduct)
})

app.get('api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    
    res.send('hello world')
})

app.get('api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    res.send('hello world')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

