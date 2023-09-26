const express = require('express')
const cors = require('cors');
const Chance = require('chance');

const chance = Chance()

const app = express()
const port = 3000

// cors allow all
app.use(cors())

app.get('/', (req, res) => {
  res.send(chance.animal());
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})