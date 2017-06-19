const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum')
, output     = loremIpsum();



output = loremIpsum({
   count: 3
   , units: 'paragraphs'
   , sentenceLowerBound: 5
   , sentenceUpperBound: 15
   , paragraphLowerBound: 3
   , paragraphUpperBound: 5
   , format: 'html'
   // , words: ['ad', 'dolor', ... ]
   // , random: Math.random
   , suffix: "ZING"
});

app.get('/', function (req, res) {
   res.send('VELCOME')
});

app.get('/lorem', function (req, res) {
   res.send(output)
});

//failed attempt 1 at hardmode VVVV... veesh.
// var num = [i <= 50];
// var countUndefined = loremIpsum({
//    count: parseInt(num);
//    , units: 'paragraphs'
//    , sentenceLowerBound: 5
//    , sentenceUpperBound: 15
//    , paragraphLowerBound: 3
//    , paragraphUpperBound: 5
//    , format: 'html'
//    , suffix: "ZING"
// });

//failed attempt 2 at hardmode VVVVV...VEESH.
// app.get('/lorem/:number' function (req, res) {
//    let req.params.number = parseInt(int)
//    res.send(loremIpsum ({
//       count:
//       , units: 'paragraphs'
//       , sentenceLowerBound: 5
//       , sentenceUpperBound: 15
//       , paragraphLowerBound: 3
//       , paragraphUpperBound: 5
//       , format: 'html'
//       // , words: ['ad', 'dolor', ... ]
//       // , random: Math.random
//       , suffix: "ZING"
//    }));


app.listen(3000, function () {
  console.log('Voila!')
});
