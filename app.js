const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('<h1>Hello Leonardo (337936)</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
