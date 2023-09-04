const express = require('express')
const breeze  = express.Router()
const fetch   = require('node-fetch');

// I should check for legal queries

breeze.get('/*', async (req, res) => {
  let query = req.params[0]
  let url = `${process.env.BREEZE_URL}/${query}`
  const request = await fetch(url,
  {
    headers: {
      "Content-Type": "application/json",
      "Api-Key": `${process.env.BREEZE_APIKEY}`  
  }
  });
  const data = await request.json();
  res.json(data)
})

// 404 Page
breeze.use(function (req, res, next) {
	res.status(404).send('<h1> Page not found </h1>');
});

module.exports = breeze
