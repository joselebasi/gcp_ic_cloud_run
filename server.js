// server.js
const http = require('http')
const PORT = process.env.PORT || 8080
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Cloud Run continuos integration sin permisos')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
