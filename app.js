const http = require('http')


const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.end('<h1>home</h1')
    console.log('you got it');
})

server.listen(5000)