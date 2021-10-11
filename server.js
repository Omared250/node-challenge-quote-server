const { response, request } = require("express");
const quotesObject = require('./quotes.json')
const lodash = require('lodash');
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

// making '/quotes' functional
const quotesInf = (request, response) => {
  response.send(quotesObject)
}

// making '/quotes/random' functional

const randomQuotes = (request, response) => {
  response.send(lodash.sample(quotesObject))
}

// making '/quotes/search' functional

const searchQuotes = (request, response) => {
  const filteredByTerm = request.query.term;
  if (filteredByTerm) {
    const termsArray = quotesObject.filter((word) => {
      return (
        word.quote.toLowerCase().includes(filteredByTerm.toLowerCase()) ||
        word.author.toLowerCase().includes(filteredByTerm.toLowerCase())
      )
    })
    response.send(termsArray)
  } else {
    response.send(quotesObject)
  }
}

app.get("/quotes", quotesInf )
app.get("/quotes/random", randomQuotes)
app.get("/quotes/search/", searchQuotes)

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen( port, function () {
  console.log("Your app is listening on port " + port);
});
