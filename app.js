const Express = require('express')
const app = new Express()
const path = require('path')
const fs = require('fs')
const port = 3000

app.use(Express.static('dist'))

app.get('*', function (req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
  res.send(html)
})

app.listen(port, () => console.log(`Local View app listening on port ${port}!`))
