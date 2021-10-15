const fs = require('fs')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const dictionaryData = JSON.parse(fs.readFileSync('./data/dictionary.json'))

app.prepare().then(() => {
  const server = express()

  server.get('/definition/:word', (req, res) => {
    const word = req.params.word.toLowerCase()
    const definition = dictionaryData[word]

    res.json({
      definition,
      found: !!definition
    })
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})