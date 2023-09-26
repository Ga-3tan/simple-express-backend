const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  console.log('test')
  res.send('Hello World from server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})