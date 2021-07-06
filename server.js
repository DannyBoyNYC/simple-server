const express = require('express')
const app = express()

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

app.get('/', 
(req, res) => {
  res.send({ message: 'Hello world' })
})

app.post('/api', (req, res) => {
  console.log(' req.body ',  req.body )
  res.send({ body: req.body})
})

const port = 3456

app.listen(port, () => (console.log(`starting on port ${port}` )))