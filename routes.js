module.exports = {
  index:index
  home:home
}

function index (req, res) {
  res.send ('<h1>hello martin and mandy</h1>')
}

function home (req, res) {
  res.sendFile(__dirname + '/index.html')
}
