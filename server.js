// Dependencies
require('dotenv').config()
const express = require('express')

// Configuration
const app = express()

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the VCD Worship Synch App!')
})

app.use('/breeze', require('./controllers/breeze.js'))

app.use(function (req, res, next) {
	res.status(404).send('<h1> Page not found </h1>');
});

// Listen
app.listen(process.env.PORT, () => {
  console.log('Connected to Server Port:', process.env.PORT);
})
