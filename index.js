var express = require ('express')
var routes = require ('./routes')

var PORT = 3001
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>hello martin and mandy</h1>')
})

app.get('/home', routes.home)

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})
