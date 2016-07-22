module.exports = {
  index:index
}

function index (req, res) {
  res.send ('<h1>hello martin and mandy</h1>')
}

function home (req, res) {
  res.send ('<h1> home page <h1>')
}
