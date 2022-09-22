const express = require('express')
const app = express()
const port = process.env.port ? process.env.port : 8000

app.get('/', (req, res) => {
  res.send('Hello World test12345678!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;