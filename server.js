const express = require('express')
const { json, urlencoded } = require( 'body-parser')
// const morgan = require('morgan')
const app = express()

// MIDDLEWARE
// posting req.body won't work without this!
app.use(json())

// custom middleware
const log = (req, res, next) => {
  myData = [1,2,3]
  setTimeout( () =>  next(), 2000)
}
// use it for all routes
app.use(log)

// ROUTES
app.get('/', 
// log, // use it for this route only
(req, res) => {
  console.log(myData)
  res.send({ message: myData })
})

app.post('/', (req, res) => {
  res.send({ body: req.body, array: myData})
})

const port = process.env.PORT || 3456
// PORT=3001 npm run start

app.listen(port, () => (console.log(`starting on port ${port}` )))