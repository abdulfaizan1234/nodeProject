const express = require('express')
const app = express()
const port = process.env.port ? process.env.port : 8000

app.get('/', (req, res) => {
  res.send('Hello World test123456!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;